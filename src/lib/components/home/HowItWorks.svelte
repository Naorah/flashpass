<script>
  import { fade, fly } from 'svelte/transition';
  
  let activeTab = $state(0);
</script>

<!-- Comment ça marche -->
<section class="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
  <div class="container max-w-6xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comment ça marche ?</h2>
      <div class="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Un processus simple en quelques étapes pour partager vos informations sensibles en toute sécurité.
      </p>
    </div>
    
    <div class="flex flex-col md:flex-row gap-4 mb-8">
      <div class="flex-1" in:fly={{ x: -50, duration: 800, delay: 200 }}>
        <div class="bg-white rounded-xl shadow-md p-6 h-full transform hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 font-bold">1</div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Créez votre Flash</h3>
          <p class="text-gray-600">
            Entrez le mot de passe ou l'information sensible que vous souhaitez partager et générez un lien unique.
          </p>
        </div>
      </div>
      
      <div class="flex-1" in:fly={{ x: -50, duration: 800, delay: 400 }}>
        <div class="bg-white rounded-xl shadow-md p-6 h-full transform hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 font-bold">2</div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Partagez le lien</h3>
          <p class="text-gray-600">
            Envoyez le lien généré à la personne qui doit recevoir l'information via votre canal de communication habituel.
          </p>
        </div>
      </div>
      
      <div class="flex-1" in:fly={{ x: -50, duration: 800, delay: 600 }}>
        <div class="bg-white rounded-xl shadow-md p-6 h-full transform hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 font-bold">3</div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Connexion P2P</h3>
          <p class="text-gray-600">
            Lorsque le destinataire ouvre le lien, une connexion P2P sécurisée s'établit automatiquement entre vos appareils.
          </p>
        </div>
      </div>
      
      <div class="flex-1" in:fly={{ x: -50, duration: 800, delay: 800 }}>
        <div class="bg-white rounded-xl shadow-md p-6 h-full transform hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 font-bold">4</div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Transmission sécurisée</h3>
          <p class="text-gray-600">
            L'information est transmise de manière chiffrée et s'autodétruit après lecture. Aucune trace n'est conservée.
          </p>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Visualisation du processus</h3>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center shrink-0 text-indigo-600 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-600">Le chiffrement est effectué localement dans votre navigateur</p>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center shrink-0 text-indigo-600 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-600">La clé de chiffrement est incluse dans le fragment d'URL (après le #) et n'est jamais envoyée au serveur</p>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center shrink-0 text-indigo-600 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-600">La connexion WebRTC P2P garantit que les données transitent directement entre les appareils</p>
            </div>
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="bg-indigo-50 rounded-xl p-6">
            <div class="tabs flex border-b border-gray-200 mb-4">
              <button 
                class={`px-4 py-2 cursor-pointer ${activeTab === 0 ? 'text-indigo-600 border-b-2 border-indigo-600 font-medium' : 'text-gray-500'}`}
                onclick={() => activeTab = 0}
              >
                Envoi
              </button>
              <button 
                class={`px-4 py-2 cursor-pointer ${activeTab === 1 ? 'text-indigo-600 border-b-2 border-indigo-600 font-medium' : 'text-gray-500'}`}
                onclick={() => activeTab = 1}
              >
                Réception
              </button>
            </div>
            
            {#if activeTab === 0}
              <div in:fade={{ duration: 300 }} class="text-sm font-mono bg-gray-800 text-green-400 p-4 rounded">
                <p>1. Génération de la clé de chiffrement</p>
                <p>2. Chiffrement du message</p>
                <p>3. Création du canal P2P</p>
                <p>4. Attente de connexion...</p>
              </div>
            {:else}
              <div in:fade={{ duration: 300 }} class="text-sm font-mono bg-gray-800 text-green-400 p-4 rounded">
                <p>1. Connexion au canal P2P</p>
                <p>2. Demande du message</p>
                <p>3. Réception du message chiffré</p>
                <p>4. Déchiffrement avec la clé d'URL</p>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>