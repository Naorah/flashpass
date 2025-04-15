<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let visible = $state(false);
  
  onMount(() => {
    visible = true;
  });
</script>

<section class="py-16 bg-white">
  <div class="container max-w-4xl mx-auto px-4">
    {#if visible}
      <div class="text-center mb-12" in:fade={{ duration: 400 }}>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Politique de Confidentialité</h1>
        <div class="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Chez FlashPass, votre confidentialité est notre priorité absolue.
        </p>
        <a href="/" class="inline-block mt-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Retour à l'accueil
        </a>
      </div>
      
      <div class="bg-gray-50 rounded-xl p-8 shadow-md mb-8" in:fly={{ y: 20, duration: 400, delay: 200 }}>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Notre engagement</h2>
        <p class="text-gray-600 mb-4">
          FlashPass a été conçu avec un principe fondamental : vos données vous appartiennent. Notre service de partage sécurisé et éphémère garantit que vos informations sensibles restent sous votre contrôle exclusif.
        </p>
        <p class="text-gray-600">
          Nous avons développé notre architecture technique pour assurer que même nous n'avons pas accès à vos données partagées.
        </p>
      </div>
      
      <div class="bg-gray-50 rounded-xl p-8 shadow-md mb-8" in:fly={{ y: 20, duration: 400, delay: 300 }}>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Politique No Logs</h2>
        <p class="text-gray-600 mb-4">
          Nous appliquons une politique stricte de non-conservation des données :
        </p>
        <ul class="list-disc pl-6 mb-4 text-gray-600 space-y-2">
          <li>Aucun enregistrement du contenu des messages partagés</li>
          <li>Aucun stockage des données sur nos serveurs</li>
          <li>Aucun suivi des activités des utilisateurs</li>
          <li>Aucune collecte d'informations personnelles</li>
          <li>Aucune donnée sur les navigateurs utilisés</li>
          <li>Aucun historique des pages visitées</li>
          <li>Aucun enregistrement des liens cliqués</li>

        </ul>
        <p class="text-gray-600">
          Les messages sont transmis directement entre les appareils via une connexion P2P sécurisée.
        </p>
      </div>
      
      <div class="bg-gray-50 rounded-xl p-8 shadow-md mb-8" in:fly={{ y: 20, duration: 400, delay: 400 }}>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Sécurité des données</h2>
        <p class="text-gray-600 mb-4">
          Notre système utilise les technologies de sécurité les plus avancées :
        </p>
        <ul class="list-disc pl-6 mb-4 text-gray-600 space-y-2">
          <li>Chiffrement AES-256 de bout en bout</li>
          <li>Connexions P2P via WebRTC</li>
          <li>Lecture unique</li>
          <li>Aucun stockage intermédiaire des données</li>
        </ul>
        <p class="text-gray-600">
          Ces mesures garantissent que vos informations sensibles ne peuvent être consultées que par le destinataire prévu.
        </p>
      </div>
      
      <div class="bg-gray-50 rounded-xl p-8 shadow-md mb-8" in:fly={{ y: 20, duration: 400, delay: 500 }}>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Cookies et technologies similaires</h2>
        <p class="text-gray-600 mb-4">
          FlashPass n'utilise aucun cookie de suivi ou d'analyse.
        </p>
        <p class="text-gray-600">
          Aucune donnée n'est partagée avec des tiers à des fins publicitaires ou commerciales.
        </p>
      </div>
      
      <div class="bg-gray-50 rounded-xl p-8 shadow-md" in:fly={{ y: 20, duration: 400, delay: 600 }}>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
        <p class="text-gray-600 mb-4">
          Si vous avez des questions concernant notre politique de confidentialité, n'hésitez pas à nous contacter :
        </p>
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <a href="/legal/contact" class="text-indigo-600 hover:text-indigo-800 transition-colors">
            Via notre formulaire de contact
          </a>
        </div>
      </div>
    {/if}
  </div>
</section>
