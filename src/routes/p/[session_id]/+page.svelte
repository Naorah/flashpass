<script lang="ts">
  import { PUBLIC_GATEWAY_URL } from '$env/static/public';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { _ } from '$lib/lang/i18n';
  import CryptoJS from 'crypto-js';

  let {data} = $props();
  let session_id = data.session_id;
  let status = $state({status: 'pending', message: $_('p.connect_to_sender')});
  let received_message = $state('');
  let copied = $state(false);
  let shared_key = $state('');

  let signaling = $state(null);
  let peer = $state(null);
  let channel = $state(null);

  onMount(() => {
    const fragment = window.location.hash;
    shared_key = fragment ? fragment.substring(1) : null;
    startSignaling();
  });

  function startSignaling() {
    signaling = new WebSocket(`${PUBLIC_GATEWAY_URL}/${session_id}`);
    peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302'
        }
      ]
    });

    peer.ondatachannel = (event) => {
      channel = event.channel;

      if (channel) {
        status = {status: 'connected', message: $_('p.connected')};
      }

      channel.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.session && data.type && data.type === 'send-flash' && data.session === session_id) {
          const sent_flash = data.message;
          const bytes = CryptoJS.AES.decrypt(sent_flash, shared_key);
          const original_text = bytes.toString(CryptoJS.enc.Utf8);
          received_message = original_text;
          status = {status: 'connected', message: $_('p.flash_received')};
        }
      }
    }

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        signaling.send(JSON.stringify({
          type: 'ice',
          session: session_id,
          candidate: event.candidate  
        }));
      }
    };

    signaling.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      
      if (data.type === 'offer') {
        peer.setRemoteDescription(new RTCSessionDescription(data.sdp));
        const answer = await peer.createAnswer();
        await peer.setLocalDescription(answer);
        signaling.send(JSON.stringify({
          type: 'answer',
          session: session_id,
          sdp: answer
        }));
      }

      if (data.type === 'ice') {
        try {
          await peer.addIceCandidate(data.candidate);
        } catch (err) {
          console.error(err);
        }
      }
    }
    
  }

  function sendP2PData(type: string,message: string) {
    if (channel) {
      channel.send(JSON.stringify({
        type: type,
        session: session_id,
        message: message
      }));
    } else {
      status = {status: 'error', message: $_('p.flash_already_sent')};
    }
  }

  // ########## VISIBILITY ##########

  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<div class="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-900 dark:to-purple-900 flex items-center justify-center p-4">
  {#if visible}
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6 space-y-8" in:fade={{ duration: 300, delay: 50 }}>
      <div class="flex items-center justify-left">
        <a href="/" class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" title="Retour à la page d'accueil" aria-label="Retour à la page d'accueil">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </a>
      </div>
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">{$_('misc.title')}</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">{$_('p.description')}</p>
      </div>

      <div class="space-y-6">
        {#if status.status === 'pending'}
          <p class="text-center text-sm text-gray-600 dark:text-gray-400 animate-pulse">{status.message}</p>
        {:else if status.status === 'error'}
          <p class="text-center text-sm text-red-600 dark:text-red-400 animate-pulse">{status.message}</p>
        {:else}
          <p class="text-center text-sm text-green-600 dark:text-green-400 animate-pulse">{status.message}</p>
        {/if}

        {#if !received_message}
          <button 
            onclick={() => sendP2PData('get-flash', "")}
            class="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <span>{$_('p.get_the_flash')}</span>
          </button>
        {:else}
          <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{$_('p.flash_received')}</span>
              <div class="h-5 w-5 text-green-600 dark:text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div class="flex">
              <input 
                type="text" 
                readonly
                value={received_message}
                class="flex-grow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-md px-3 py-2 text-sm font-mono truncate text-gray-900 dark:text-gray-100"
              />
              <button 
                onclick={() => {
                  navigator.clipboard.writeText(received_message);
                  copied = true;
                  setTimeout(() => { copied = false; }, 2000);
                }}
                class="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-3 rounded-r-md transition-colors"
              >
                {#if copied}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                {:else}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                {/if}
              </button>
            </div>
          </div>

          {/if}
          <div class="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <div class="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>{$_('misc.crypt')}</span>
            </div>
            <span>•</span>
            <div class="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{$_('misc.expire_after_reading')}</span>
            </div>
            <span>•</span>
            <div class="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{$_('misc.p2p')}</span>
            </div>
          </div>
      </div>

      <div class="text-center text-xs text-gray-500 dark:text-gray-400">
        <p>{$_('misc.slogan')}</p>
      </div>
    </div>
  {/if}
</div>