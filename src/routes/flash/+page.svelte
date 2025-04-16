<script>
  import { PUBLIC_GATEWAY_URL } from '$env/static/public';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import CryptoJS from 'crypto-js';

  let text_to_transmit = $state('');
  let copied = $state(false);
  let is_generating = $state(false);
  let session_id = $state('');
  let shared_key = $state('');
  let link = $state('');
  let status = $state({status: 'pending', message: 'En attente de connexion...'});

  async function sendPassword() {
    is_generating = true;
    link = '';
    session_id = crypto.randomUUID();
    shared_key = crypto.randomUUID();
    startSignaling();
    link = `${location.origin}/p/${session_id}#${shared_key}`;
    is_generating = false;
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(link);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }

  async function handleKeydown(event) {
    if (event.key === 'Enter') {
      await sendPassword();
    }
  }
  
  // SIGNALING SERVER
  let signaling = $state(null);
  let peer = $state(null);
  let channel = $state(null);

  async function startSignaling() {
    signaling = new WebSocket(`${PUBLIC_GATEWAY_URL}/${session_id}`);
  
    peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302'
        }
      ]
    });

    channel = peer.createDataChannel('FlashChat');

    /**
     * Envoyer les ICE candidates au serveur de signaling
     * @param event
     */
    peer.onicecandidate = (event) => {
      if (event.candidate) {
        signaling.send(JSON.stringify({
          type: 'ice',
          session: session_id,
          candidate: event.candidate
        }));
      }
    };

    /**
     * Envoyer l'offer au serveur de signaling
     * @param event
     */
    signaling.onopen = async () => {
      const offer = await peer.createOffer();
      await peer.setLocalDescription(offer);
      
      signaling.send(JSON.stringify({
        type: 'offer',
        session: session_id,
        sdp: offer
      }));
      status = {status: 'connected', message: 'Prêt à envoyer le mot de passe !'}
    };

    /**
     * Recevoir la réponse de l'autre utilisateur depuis le serveur de signaling
     * @param event
     */
    signaling.onmessage = async (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'answer') {
        try {
          if (peer.signalingState === "have-local-offer") {
            await peer.setRemoteDescription(new RTCSessionDescription(data.sdp));
          } else {
            status = {status: 'error', message: 'Le mot de passe est demandé une seconde fois mais à expiré'};
          }
        } catch (err) {
          status = {status: 'error', message: 'Le mot de passe est demandé une seconde fois mais à expiré'};
        }
      }

      if (data.type === 'ice') {
        try {
          await peer.addIceCandidate(data.candidate);
        } catch (err) {
          console.error('Erreur ICE côté sender :', err);
        }
      }
    };

    /**
     * Recevoir la demande de mot de passe
     * @param event
     */
    channel.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.session && data.type && data.type === 'get-flash' && data.session === session_id) {
        status = {status: 'connected', message: 'Mot de passe transmis !'}
        const encryptedMessage = CryptoJS.AES.encrypt(text_to_transmit, shared_key).toString();
        channel.send(JSON.stringify({
          type: 'send-flash',
          session: session_id,
          message: encryptedMessage
        }));
      }
    }
  }

  // ########## END SIGNALING SERVER ##########

  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<div class="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
  {#if visible}
    <div class="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 space-y-8" in:fade={{ duration: 300, delay: 50 }} >
      <div class="flex items-center justify-left">
        <a href="/" class="text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </a>
      </div>
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-800">FlashPass</h1>
        <p class="text-gray-600 mt-2">Partagez un mot de passe de façon sécurisée</p>
      </div>

      <div class="space-y-6">
        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-700">Message sécurisé</span>
            <div class="h-5 w-5 text-indigo-600">
              {#if text_to_transmit}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              {/if}
            </div>
          </div>
          <input class="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm w-full" bind:value={text_to_transmit} onkeydown={handleKeydown}>
        </div>

        <button 
          onclick={sendPassword} 
          class="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
          disabled={is_generating}
        >
          {#if is_generating}
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Génération en cours...</span>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Générer un Flash</span>
          {/if}
        </button>

        {#if link}
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Lien à partager</span>
              <div class="h-5 w-5 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div class="flex">
              <input 
                type="text" 
                readonly
                value={link || 'Generating...'}
                class="flex-grow bg-white border border-gray-300 rounded-l-md px-3 py-2 text-sm font-mono truncate"
              />
              <button 
                onclick={copyToClipboard} 
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 rounded-r-md transition-colors"
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

            {#if status.status === 'connected'}
              <p class="text-green-600 text-xs mt-1 animate-pulse">{status.message}</p>
            {:else if status.status === 'error'}
              <p class="text-red-600 text-xs mt-1 animate-pulse">{status.message}</p>
            {:else}
              <p class="text-gray-600 text-xs mt-1 animate-pulse">{status.message}</p>
            {/if}
          </div>

          {/if}
          <div class="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <div class="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Chiffré</span>
            </div>
            <span>•</span>
            <div class="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Expire après lecture</span>
            </div>
            <span>•</span>
            <div class="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>P2P</span>
            </div>
          </div>
      </div>

      <div class="text-center text-xs text-gray-500">
        <p>FlashPass - Partagez des mots de passe en toute sécurité</p>
      </div>
    </div>
  {/if}
</div>
