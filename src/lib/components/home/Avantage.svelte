<script>
  import { _ } from '$lib/lang/i18n';
</script>

<!-- Avantages -->
<section id="features" class="py-20 bg-white dark:bg-gray-900">
  <div class="container max-w-6xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        {$_('advantages.title')}
      </h2>
      <div class="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {$_('advantages.description')}
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Avantage 1 -->
      <div class="feature-card bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div class="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600 dark:text-indigo-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M8 11h8"/>
            <path d="M12 15V7"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('advantages.security.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          {$_('advantages.security.description')}
        </p>
      </div>
      
      <!-- Avantage 2 -->
      <div class="feature-card bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div class="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600 dark:text-indigo-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('advantages.cryptography.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          {$_('advantages.cryptography.description')}
        </p>
      </div>
      
      <!-- Avantage 3 -->
      <div class="feature-card bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div class="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600 dark:text-indigo-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
            <polyline points="13 2 13 9 20 9"/>
            <line x1="9" y1="15" x2="15" y2="15"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('advantages.reading.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          {$_('advantages.reading.description')}
        </p>
      </div>
      
      <!-- Avantage 4 -->
      <div class="feature-card bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div class="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600 dark:text-indigo-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3h18v18H3z"/>
            <path d="M8 12h8"/>
            <path d="M12 8v8"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('advantages.nostorage.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          {$_('advantages.nostorage.description')}
        </p>
      </div>
      
      <!-- Avantage 5 -->
      <div class="feature-card bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div class="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600 dark:text-indigo-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('advantages.nologs.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          {$_('advantages.nologs.description')}
        </p>
      </div>
      
      <!-- Avantage 6 -->
      <div class="feature-card bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div class="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600 dark:text-indigo-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {$_('advantages.opensource.title')}
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          {$_('advantages.opensource.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .feature-card {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgba(226, 232, 240, 0.7);
    backdrop-filter: blur(10px);
  }
  
  .feature-card:hover {
    transform: translateY(-5px) scale(1.03);
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.15);
    border: 1px solid rgba(99, 102, 241, 0.3);
  }
  
  :global(.dark) .feature-card:hover {
    background: rgba(31, 41, 55, 0.8);
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.2);
    border: 1px solid rgba(99, 102, 241, 0.4);
  }
  
  .feature-card:hover .icon-container {
    transform: scale(1.1);
    background-color: rgba(99, 102, 241, 0.2);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
  }
  
  .icon-container {
    transition: all 0.3s ease;
  }
</style>