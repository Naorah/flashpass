<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { _ } from '$lib/lang/i18n';

  let visible = $state(false);
  
  onMount(() => {
    visible = true;
  });
</script>

<section class="py-16 bg-white dark:bg-gray-900">
  <div class="container max-w-4xl mx-auto px-4">
    {#if visible}
      <div class="text-center mb-12" in:fade={{ duration: 400 }}>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {$_('privacy.title')}
        </h1>
        <div class="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {$_('privacy.description')}
        </p>
        <a href="/" class="inline-block mt-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
          {$_('misc.home')}
        </a>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md mb-8" in:fly={{ y: 20, duration: 400, delay: 200 }}>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {$_('privacy.commitment')}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {$_('privacy.commitment_description')}
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          {$_('privacy.commitment_description_2')}
        </p>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md mb-8" in:fly={{ y: 20, duration: 400, delay: 300 }}>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {$_('privacy.no_logs')}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {$_('privacy.no_logs_description')}
        </p>
        <ul class="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300 space-y-2">
          <li>{$_('privacy.no_log_description_1')}</li>
          <li>{$_('privacy.no_log_description_2')}</li>
          <li>{$_('privacy.no_log_description_3')}</li>
          <li>{$_('privacy.no_log_description_4')}</li>
          <li>{$_('privacy.no_log_description_5')}</li>
          <li>{$_('privacy.no_log_description_6')}</li>
          <li>{$_('privacy.no_log_description_7')}</li>
        </ul>
        <p class="text-gray-600 dark:text-gray-300">
          {$_('privacy.transmission_security')}
        </p>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md mb-8" in:fly={{ y: 20, duration: 400, delay: 400 }}>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {$_('privacy.security_measures')}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {$_('privacy.security_measures_description')}
        </p>
        <ul class="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300 space-y-2">
          <li>{$_('privacy.security_measures_description_1')}</li>
          <li>{$_('privacy.security_measures_description_2')}</li>
          <li>{$_('privacy.security_measures_description_3')}</li>
          <li>{$_('privacy.security_measures_description_4')}</li>
        </ul>
        <p class="text-gray-600 dark:text-gray-300">
          {$_('privacy.no_log_p2p')}
        </p>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md mb-8" in:fly={{ y: 20, duration: 400, delay: 500 }}>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {$_('privacy.cookies')}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {$_('privacy.cookies_description_no_cookies')}
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          {$_('privacy.cookies_description_data_share')}
        </p>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md" in:fly={{ y: 20, duration: 400, delay: 600 }}>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {$_('privacy.contact')}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {$_('privacy.contact_description')}
        </p>
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <a href="/legal/contact" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
            {$_('privacy.contact_form')}
          </a>
        </div>
      </div>
    {/if}
  </div>
</section>
