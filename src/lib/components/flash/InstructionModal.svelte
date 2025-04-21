<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { _ } from '$lib/lang/i18n';

  let visible = $state(false);
  let noRepeat = $state(false);

  onMount(() => {
    const noRepeatSetting = localStorage.getItem('instruction_no_repeat') || false;
    if (!noRepeatSetting) {
      visible = true;
    }
  });

  function closeModal() {
    visible = false;
    if (noRepeat) {
      localStorage.setItem('instruction_no_repeat', 'true');
    }
  }

  function stopPropagation(event) {
    event.stopPropagation();
  }

  function handleNoRepeatChange(event) {
    noRepeat = event.target.checked;
  }
</script>

{#if visible}
  <div 
    class="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
    transition:fade={{ duration: 200 }}
    onclick={closeModal}
    onkeydown={(e) => e.key === 'Enter' && closeModal()}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    tabindex="0"
  >
    <div
      in:fly={{ y: 20, duration: 300, delay: 100 }}
      class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full p-6 md:p-8 space-y-8 transform transition-all"
      onclick={stopPropagation}
      onkeydown={(e) => e.key === 'Enter' && stopPropagation()}
      role="button"
      tabindex="0"
    >
      <div class="flex items-center justify-between">
        <h2 id="modal-title" class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {$_('instruction_modal.title')}
        </h2>
        <button 
          onclick={closeModal}
          class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors"
          aria-label="Fermer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul class="space-y-6 text-gray-700 dark:text-gray-300">
        <li class="flex gap-4 items-start hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg transition-colors">
          <div class="bg-indigo-100 dark:bg-indigo-900/50 rounded-lg p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="font-semibold mb-1">{$_('instruction_modal.direct_sharing')}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{$_('instruction_modal.direct_sharing_description')}</p>
          </div>
        </li>
        <li class="flex gap-4 items-start hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg transition-colors">
          <div class="bg-indigo-100 dark:bg-indigo-900/50 rounded-lg p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="font-semibold mb-1">{$_('instruction_modal.unique_usage')}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{$_('instruction_modal.unique_usage_description')}</p>
          </div>
        </li>
        <li class="flex gap-4 items-start hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg transition-colors">
          <div class="bg-indigo-100 dark:bg-indigo-900/50 rounded-lg p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="font-semibold mb-1">{$_('instruction_modal.p2p_connection')}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{$_('instruction_modal.p2p_connection_description')}</p>
          </div>
        </li>
        <li class="flex gap-4 items-start hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg transition-colors">
          <div class="bg-indigo-100 dark:bg-indigo-900/50 rounded-lg p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="font-semibold mb-1">{$_('instruction_modal.auto_expire')}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{$_('instruction_modal.auto_expire_description')}</p>
          </div>
        </li>
      </ul>

      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
        <label class="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
          <input 
            type="checkbox" 
            id="instruction_no_repeat"
            bind:checked={noRepeat}
            onchange={handleNoRepeatChange}
            class="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition-colors"
          />
          <span>{$_('instruction_modal.no_repeat')}</span>
        </label>

        <button
          type="button"
          class="cursor-pointer w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onclick={closeModal}
          aria-label="Fermer"
        >
          {$_('instruction_modal.understood')}
        </button>
      </div>
    </div>
  </div>
{/if}
