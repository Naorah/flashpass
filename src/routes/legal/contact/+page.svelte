<script>
  import { fade, fly } from 'svelte/transition';
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';
  import { _ } from '$lib/lang/i18n';

  let visible = $state(false);
  let nameCount = $state(0);
  let emailCount = $state(0); 
  let messageCount = $state(0);
  let formSubmitted = $state(false);

  let formData = $state({
    name: '',
    email: '',
    message: ''
  });

  $effect(() => {
    nameCount = formData.name.length;
    emailCount = formData.email.length;
    messageCount = formData.message.length;
  });
  
  onMount(() => {
    visible = true;
  });
</script>

<div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
  <div class="container max-w-4xl mx-auto px-4 py-16">
    {#if visible}
      <div class="text-center mb-12" in:fade={{ duration: 400 }}>
        <h1 class="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {$_('contact.title')}
        </h1>
        <div class="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {$_('contact.description')}
        </p>
        <a href="/" class="inline-block mt-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
          {$_('misc.home')}
        </a>
      </div>
    
      <div class="mb-6 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white" in:fly={{ y: 20, duration: 400, delay: 200 }}>
        <h3 class="text-2xl font-bold mb-4">
          {$_('contact.information')}
        </h3>
        <div class="mb-6">
          <div class="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{$_('contact.address')}</span>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-6" in:fade={{ duration: 800, delay: 400 }}>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          {$_('contact.contact_us')}
        </h2>
        
        {#if formSubmitted}
          <div class="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-100 px-4 py-3 rounded mb-6" in:fade>
            <p>{$_('contact.thanks')}</p>
          </div>
        {:else}
          <form method="POST" class="space-y-6" use:enhance={() => {
            return async ({ result, update }) => {
              if (result.type === 'success') {
                formSubmitted = true;
                update();
              }
            }
          }}>
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {$_('contact.name')}
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                bind:value={formData.name} 
                maxlength="20"
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
              <div class="text-sm text-gray-500 dark:text-gray-400 mt-1 flex justify-between">
                <span>{$_('contact.name_max')}</span>
                <span class={nameCount > 20 ? "text-red-500 dark:text-red-400" : ""}>{nameCount}/20</span>
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {$_('contact.email')}
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                bind:value={formData.email}
                maxlength="40" 
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
              <div class="text-sm text-gray-500 dark:text-gray-400 mt-1 flex justify-between">
                <span>{$_('contact.email_max')}</span>
                <span class={emailCount > 40 ? "text-red-500 dark:text-red-400" : ""}>{emailCount}/40</span>
              </div>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {$_('contact.message')}
              </label>
              <textarea 
                id="message" 
                name="message"
                bind:value={formData.message}
                maxlength="250"
                required
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              ></textarea>
              <div class="text-sm text-gray-500 dark:text-gray-400 mt-1 flex justify-between">
                <span>{$_('contact.message_max')}</span>
                <span class={messageCount > 250 ? "text-red-500 dark:text-red-400" : ""}>{messageCount}/250</span>
              </div>
            </div>
            
            <div>
              <button 
                type="submit" 
                class="cursor-pointer w-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                disabled={nameCount > 20 || emailCount > 40 || messageCount > 250}
              >
                {$_('contact.send')}
              </button>
            </div>
          </form>
        {/if}
        
      </div>
      
      <div class="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8" in:fly={{ y: 20, duration: 400, delay: 400 }}>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          {$_('contact.FAQ')}
        </h2>
        <div class="space-y-6">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-8">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {$_('contact.FAQ.how_it_works')}
            </h3>
            <div class="text-gray-600 dark:text-gray-300">
              {$_('contact.FAQ.how_it_works_description')}
            </div>
          </div>
          <div class="border-b border-gray-200 dark:border-gray-700 pb-8">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {$_('contact.FAQ.security_data')}
            </h3>
            <div class="text-gray-600 dark:text-gray-300">
              {$_('contact.FAQ.security_data_description')}
            </div>
          </div>
          <div class="border-b border-gray-200 dark:border-gray-700 pb-8">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {$_('contact.FAQ.can_i_recover_a_message')}
            </h3>
            <div class="text-gray-600 dark:text-gray-300">
              {$_('contact.FAQ.can_i_recover_a_message_description')}
            </div>
          </div>
          <div class="border-b border-gray-200 dark:border-gray-700 pb-8">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {$_('contact.FAQ.is_flashpass_free')}
            </h3>
            <div class="text-gray-600 dark:text-gray-300">
              {$_('contact.FAQ.is_flashpass_free_description')}
            </div>
          </div>
          <div class="pb-4">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {$_('contact.FAQ.i_want_more')}
            </h3>
            <div class="text-gray-600 dark:text-gray-300">
              {$_('contact.FAQ.i_want_more_description')}
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
