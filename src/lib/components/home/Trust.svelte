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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
            <line x1="5" y1="12" x2="19" y2="12" stroke-width="2"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('trust.noinscription.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('trust.noinscription.description')}
        </p>
      </div>
      
      <div class="text-center p-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 transform hover:-translate-y-1" in:fly={{ y: 20, duration: 400, delay: 200 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-300">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <path d="M22 6l-10 7L2 6"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('trust.easy.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('trust.easy.description')}
        </p>
      </div>
      
      <div class="text-center p-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 transform hover:-translate-y-1" in:fly={{ y: 20, duration: 400, delay: 300 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-300">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
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
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('trust.nopub.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('trust.nopub.description')}
        </p>
      </div>
      
      <div class="text-center p-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 transform hover:-translate-y-1" in:fly={{ y: 20, duration: 400, delay: 500 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-300">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('trust.forget.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('trust.forget.description')}
        </p>
      </div>
      
      <div class="text-center p-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 transform hover:-translate-y-1" in:fly={{ y: 20, duration: 400, delay: 600 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-300">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M8 10h8"/>
            <path d="M12 6v8"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('trust.confidentiality.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('trust.confidentiality.description')}
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M12 8v4"/>
              <path d="M12 16h.01"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>