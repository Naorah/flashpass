<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = $state(false);

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
<section class="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center px-4 py-16 text-white relative">
  <div class="absolute inset-0 bg-black opacity-10 z-0"></div>
  
  {#if visible}
    <div class="container max-w-4xl mx-auto z-10 text-center space-y-8">
      <h1 in:fly={{ y: -50, duration: 800 }} class="text-5xl md:text-7xl font-bold tracking-tight">
        FlashPass
      </h1>
      
      <p in:fly={{ y: -30, duration: 800, delay: 300 }} class="text-xl md:text-2xl font-light">
        Partagez vos mots de passe de façon sécurisée et éphémère
      </p>
      
      <p in:fade={{ duration: 1000, delay: 600 }} class="text-lg max-w-2xl mx-auto">
        Une solution P2P pour envoyer des mots de passe sans laisser de trace.
      </p>
      
      <div in:fade={{ duration: 1000, delay: 900 }} class="pt-6">
        <a href="/flash" class="px-8 py-4 bg-white text-indigo-600 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
          Créer un Flash
        </a>
      </div>
      
      <div in:fade={{ duration: 1000, delay: 1200 }} class="pt-12">
        <button onclick={() => scrollToSection('features')} class="flex items-center justify-center mx-auto animate-bounce cursor-pointer" aria-label="Scroll to features section">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  {/if}
</section>