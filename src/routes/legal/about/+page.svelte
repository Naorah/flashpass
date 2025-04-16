<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { _ } from '$lib/lang/i18n';

  let visible = $state(false);
  let formSubmitted = $state(false);
  let formData = $state({
    name: '',
    email: '',
    message: ''
  });
  
  onMount(() => {
    visible = true;
  });
  
  function handleSubmit() {
    // Ici, vous pourriez ajouter la logique pour envoyer le formulaire
    // Pour l'instant, nous simulons juste une soumission réussie
    formSubmitted = true;
    formData = {
      name: '',
      email: '',
      message: ''
    };
    
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      formSubmitted = false;
    }, 5000);
  }
</script>

<section class="py-16 bg-white dark:bg-gray-900">
  <div class="container max-w-4xl mx-auto px-4">
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        {$_('about.title')}
      </h1>
      <div class="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        {$_('about.description')}
      </p>
      <a href="/" class="inline-block mt-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
        {$_('misc.home')}
      </a>
    </div>
    
    {#if visible}
    <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md mb-12" in:fade={{ duration: 800 }}>
      <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        {$_('about.the_mission')}
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        {$_('about.the_mission_description_1')}
      </p>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        {$_('about.the_mission_description_2')}
      </p>
      <p class="text-gray-600 dark:text-gray-400">
        {$_('about.the_mission_description_3')}
      </p>
    </div>
    
    <div class="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 shadow-md mb-12 text-white" in:fade={{ duration: 800, delay: 100 }}>
      <h2 class="text-2xl font-bold mb-4">Le créateur</h2>
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div class="w-32 h-32 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
          <img src="/creator.png" alt="Lov3boX" class="w-full h-full object-cover" />
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">
            {$_('about.the_creator_name')}
          </h3>
          <p class="mb-4 text-white/90">
            {$_('about.the_creator_description')}
          </p>
          <p class="text-white/80">
            {$_('about.the_creator_description_2')}
          </p>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300" in:fly={{ y: 20, duration: 400, delay: 200 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-400">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <circle cx="12" cy="8" r="3"></circle>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('about.privacy')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('about.privacy_description')}
        </p>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300" in:fly={{ y: 20, duration: 400, delay: 300 }}>
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 dark:text-indigo-400">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('about.simplicity')}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$_('about.simplicity_description')}
        </p>
      </div>
    </div>
    {/if}
  </div>
</section>
