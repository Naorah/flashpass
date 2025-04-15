<script>
  import { fade, fly } from 'svelte/transition';

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<!-- Problème résolu -->
<section class="py-20 bg-gray-50">
  <div class="container max-w-4xl mx-auto px-4">
    <div class="text-center mb-16" in:fade={{ duration: 800, delay: 200 }}>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Le problème des mots de passe partagés</h2>
      <div class="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Les emails, SMS et messageries instantanées ne sont pas conçus pour partager des informations sensibles. 
        Ils laissent des traces permanentes et sont vulnérables aux interceptions.
      </p>
    </div>
    
    <div class="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm border border-gray-100" in:fly={{ y: 50, duration: 800, delay: 400 }}>
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">FlashPass résout ce problème</h3>
          <p class="text-gray-600 mb-4 text-justify">
            Notre solution utilise une connexion P2P chiffrée de bout en bout pour transmettre vos mots de passe 
            sans jamais les stocker sur un serveur. Une fois lus, ils disparaissent définitivement.
          </p>
          <p class="text-gray-600 text-justify">
            Simple, sécurisé et éphémère - comme un message qui s'autodétruit après lecture.
          </p>
          <button class="mt-6 flex items-center text-indigo-600 font-medium pulse-animation cursor-pointer" onclick={() => scrollToSection('features')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <span>Découvrir comment ça marche</span>
          </button>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <div class="w-48 h-48 bg-indigo-100 rounded-full flex items-center justify-center shadow-inner pulse-glow">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-500">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .pulse-animation {
    transition: all 0.3s ease;
  }
  
  .pulse-animation:hover {
    transform: translateX(5px);
  }
  
  .pulse-glow {
    animation: pulse 3s infinite;
    transition: all 0.3s ease;
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(99, 102, 241, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
    }
  }
</style>