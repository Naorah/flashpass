<script>
  import { fade, fly } from 'svelte/transition';
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';
  
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

<div class="bg-gray-50 min-h-screen">
  <div class="container max-w-4xl mx-auto px-4 py-16">
    {#if visible}
      <div class="text-center mb-12" in:fade={{ duration: 400 }}>
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Contactez-nous</h1>
        <div class="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Vous avez des questions ou des suggestions ? N'hésitez pas à nous contacter. Notre équipe vous répondra dans les plus brefs délais.
        </p>
        <a href="/" class="inline-block mt-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Retour à l'accueil
        </a>
      </div>
    
      <div class="mb-6 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white" in:fly={{ y: 20, duration: 400, delay: 200 }}>
        <h3 class="text-2xl font-bold mb-4">Informations</h3>
        <div class="mb-6">
          <div class="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Strasbourg, France</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl p-8 shadow-md mb-6" in:fade={{ duration: 800, delay: 400 }}>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Contactez-nous</h2>
        
        {#if formSubmitted}
          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" in:fade>
            <p>Merci pour votre message ! Tout a été envoyé avec succès !</p>
          </div>
        {:else}
          <form method="POST" class="space-y-6" use:enhance={() => {
            return async ({ result, update }) => {
              console.log(result);
              if (result.type === 'success') {
                formSubmitted = true;
                update();
              }
            }
          }}>
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input 
                type="text" 
                id="name"
                name="name"
                bind:value={formData.name} 
                maxlength="20"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
              <div class="text-sm text-gray-500 mt-1 flex justify-between">
                <span>Maximum 20 caractères</span>
                <span class={nameCount > 20 ? "text-red-500" : ""}>{nameCount}/20</span>
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                bind:value={formData.email}
                maxlength="40" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
              <div class="text-sm text-gray-500 mt-1 flex justify-between">
                <span>Maximum 40 caractères</span>
                <span class={emailCount > 40 ? "text-red-500" : ""}>{emailCount}/40</span>
              </div>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message"
                bind:value={formData.message}
                maxlength="250"
                required
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
              <div class="text-sm text-gray-500 mt-1 flex justify-between">
                <span>Maximum 250 caractères</span>
                <span class={messageCount > 250 ? "text-red-500" : ""}>{messageCount}/250</span>
              </div>
            </div>
            
            <div>
              <button 
                type="submit" 
                class="w-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled={nameCount > 20 || emailCount > 40 || messageCount > 250}
              >
                Envoyer
              </button>
            </div>
          </form>
        {/if}
        
      </div>
      
      <div class="mt-16 bg-white rounded-xl shadow-md p-8" in:fly={{ y: 20, duration: 400, delay: 400 }}>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Questions fréquentes</h2>
        <div class="space-y-6">
          <div class="border-b border-gray-200 pb-8">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Comment fonctionne FlashPass ?</h3>
            <div class="text-gray-600">FlashPass utilise la technologie WebRTC pour établir une connexion directe et chiffrée entre l'expéditeur et le destinataire. Vos données ne transitent jamais par nos serveurs.</div>
          </div>
          <div class="border-b border-gray-200 pb-8">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Mes données sont-elles vraiment sécurisées ?</h3>
            <div class="text-gray-600">Absolument. Nous utilisons un chiffrement AES-256 de niveau militaire et une architecture qui garantit que même nous ne pouvons pas accéder à vos informations.</div>
          </div>
          <div class="border-b border-gray-200 pb-8">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Puis-je récupérer un message après l'avoir envoyé ?</h3>
            <div class="text-gray-600">Non, une fois qu'un message est envoyé, il ne peut être lu qu'une seule fois par le destinataire. Après lecture, il faudra en créer un nouveau.</div>
          </div>
          <div class="border-b border-gray-200 pb-8">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">FlashPass est-il gratuit ?</h3>
            <div class="text-gray-600">Oui, FlashPass est entièrement gratuit.</div>
          </div>
          <div class="pb-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Je veux quelque chose de plus !</h3>
            <div class="text-gray-600">N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.</div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
