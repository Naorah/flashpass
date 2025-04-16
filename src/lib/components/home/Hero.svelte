<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { _ } from '$lib/lang/i18n';
  
  import LightningOverlay from '$lib/components/home/LightningOverlay.svelte';

  let visible = $state(false);
  let flash_enabled = $state(true);

  onMount(() => {
    visible = true;
  });

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<!-- Hero Section -->
<button 
  class="absolute inset-0 w-full h-full bg-transparent z-10" 
  onclick={() => flash_enabled = !flash_enabled} 
  aria-label="Toggle flash"
></button>
<section class="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-900 dark:to-purple-900 flex flex-col items-center justify-center px-4 py-16 text-white relative">
  <div class="absolute inset-0 bg-black opacity-10 z-0"></div>
  <LightningOverlay storm_intensity={7} flash_power={0.5} min_delay={50} max_delay={1500} bind:flash_enabled={flash_enabled} />
  
  {#if visible}
    <div class="container max-w-4xl mx-auto z-10 text-center space-y-8">
      <h1 in:fly={{ y: -50, duration: 800 }} class="text-5xl md:text-7xl font-bold tracking-tight">
        {$_('misc.title')}
      </h1>
      
      <p in:fly={{ y: -30, duration: 800, delay: 300 }} class="text-xl md:text-2xl font-light">
        {$_('hero.subtitle')}
      </p>
      
      <p in:fade={{ duration: 1000, delay: 600 }} class="text-lg max-w-2xl mx-auto">
        {$_('hero.description')}
      </p>
      
      <div in:fade={{ duration: 1000, delay: 900 }} class="pt-6 z-50">
        <a href="/flash" class="px-8 py-4 bg-white text-indigo-600 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
          {$_('hero.button')}
        </a>
      </div>
      
      <div in:fade={{ duration: 1000, delay: 1200 }} class="pt-12">
        <button onclick={() => scrollToSection('features')} class="flex items-center justify-center mx-auto animate-bounce cursor-pointer z-50" aria-label="Scroll to features section">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  {/if}
</section>