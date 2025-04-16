<!-- Trust Elements -->
<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { _ } from '$lib/lang/i18n';

  let visible = $state(false);
  
  onMount(() => {
    visible = true;
  });
</script>

<section class="py-20 bg-white dark:bg-gray-900">
  <div class="container max-w-4xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        {$_('trust.title')}
      </h2>
      <div class="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
    </div>
    
    {#if visible}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div class="text-center p-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 transform hover:-translate-y-1" in:fly={{ y: 20, duration: 400, delay: 100 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-300">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('trust.nolog.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('trust.nolog.description')}
        </p>
      </div>
      
      <div class="text-center p-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 transform hover:-translate-y-1" in:fly={{ y: 20, duration: 400, delay: 200 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-300">
            <line x1="2" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('trust.nostorage.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('trust.nostorage.description')}
        </p>
      </div>
      
      <div class="text-center p-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 transform hover:-translate-y-1" in:fly={{ y: 20, duration: 400, delay: 300 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-300">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('trust.security.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('trust.security.description')}
        </p>
      </div>
      
      <div class="text-center p-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 transform hover:-translate-y-1" in:fly={{ y: 20, duration: 400, delay: 400 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-300">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('trust.p2p.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('trust.p2p.description')}
        </p>
      </div>
      
      <div class="text-center p-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 transform hover:-translate-y-1" in:fly={{ y: 20, duration: 400, delay: 500 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-300">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="m2 2 7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('trust.unique.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('trust.unique.description')}
        </p>
      </div>
      
      <div class="text-center p-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 transform hover:-translate-y-1" in:fly={{ y: 20, duration: 400, delay: 600 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-300">
            <path d="m3 11 18-5v12L3 14v-3z" />
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('trust.easy.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('trust.easy.description')}
        </p>
      </div>
    </div>
    {/if}
    
    <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300" in:fade={{ duration: 800, delay: 700 }}>
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {$_('trust.engagement.title')}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {$_('trust.engagement.subtitle')}
          </p>
          <p class="text-gray-600 dark:text-gray-400">
            {$_('trust.engagement.description')}
          </p>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <div class="w-48 h-48 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center shadow-md transform hover:scale-105 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-500 dark:text-indigo-300">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>