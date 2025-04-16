<script>
  import { fade, fly } from 'svelte/transition';
  import { _ } from '$lib/lang/i18n';

  let activeTab = $state(0);
</script>

<!-- Comment ça marche -->
<section class="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900">
  <div class="container max-w-6xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        {$_('howitworks.title')}
      </h2>
      <div class="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {$_('howitworks.description')}
      </p>
    </div>
    
    <div class="flex flex-col md:flex-row gap-4 mb-8">
      <div class="flex-1" in:fly={{ x: -50, duration: 800, delay: 200 }}>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 h-full transform hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400 font-bold">1</div>
          <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {$_('howitworks.step1.title')}
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            {$_('howitworks.step1.description')}
          </p>
        </div>
      </div>
      
      <div class="flex-1" in:fly={{ x: -50, duration: 800, delay: 400 }}>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 h-full transform hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400 font-bold">2</div>
          <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {$_('howitworks.step2.title')}
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            {$_('howitworks.step2.description')}
          </p>
        </div>
      </div>
      
      <div class="flex-1" in:fly={{ x: -50, duration: 800, delay: 600 }}>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 h-full transform hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400 font-bold">3</div>
          <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {$_('howitworks.step3.title')}
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            {$_('howitworks.step3.description')}
          </p>
        </div>
      </div>
      
      <div class="flex-1" in:fly={{ x: -50, duration: 800, delay: 800 }}>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 h-full transform hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400 font-bold">4</div>
          <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {$_('howitworks.step4.title')}
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            {$_('howitworks.step4.description')}
          </p>
        </div>
      </div>
    </div>
    
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {$_('howitworks.view.title')}
          </h3>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-600 dark:text-gray-300">
                {$_('howitworks.view.step1')}
              </p>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-600 dark:text-gray-300">
                {$_('howitworks.view.step2')}
              </p>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-600 dark:text-gray-300">
                {$_('howitworks.view.step3')}
              </p>
            </div>
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="bg-indigo-50 dark:bg-indigo-900 rounded-xl p-6">
            <div class="tabs flex border-b border-gray-200 dark:border-gray-700 mb-4">
              <button 
                class={`px-4 py-2 cursor-pointer ${activeTab === 0 ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 font-medium' : 'text-gray-500 dark:text-gray-400'}`}
                onclick={() => activeTab = 0}
              >
                {$_('howitworks.view.send')}
              </button>
              <button 
                class={`px-4 py-2 cursor-pointer ${activeTab === 1 ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 font-medium' : 'text-gray-500 dark:text-gray-400'}`}
                onclick={() => activeTab = 1}
              >
                {$_('howitworks.view.receive')}
              </button>
            </div>
            
            {#if activeTab === 0}
              <div in:fade={{ duration: 300 }} class="text-xs md:text-sm font-mono bg-gray-800 dark:bg-gray-900 text-green-400 p-4 rounded">
                <p>{$_('howitworks.view.send.step1')}</p>
                <p>{$_('howitworks.view.send.step2')}</p>
                <p>{$_('howitworks.view.send.step3')}</p>
                <p>{$_('howitworks.view.send.step4')}</p>
              </div>
            {:else}
              <div in:fade={{ duration: 300 }} class="text-xs md:text-sm font-mono bg-gray-800 dark:bg-gray-900 text-green-400 p-4 rounded">
                <p>{$_('howitworks.view.receive.step1')}</p>
                <p>{$_('howitworks.view.receive.step2')}</p>
                <p>{$_('howitworks.view.receive.step3')}</p>
                <p>{$_('howitworks.view.receive.step4')}</p>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>