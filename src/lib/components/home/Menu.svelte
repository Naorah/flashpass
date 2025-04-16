<script>
  import { onMount } from 'svelte';
  import { fly, slide } from 'svelte/transition';
  import { _, locale } from "$lib/lang/i18n";

  let theme = $state('light');
  let isMenuOpen = $state(false);
  let isLanguageOpen = $state(false);
  let languageButtonRef = $state(null);
  let languageButtonRect = $state(null);

  onMount(() => {
    theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
    if (localStorage.getItem('lang')) {
      locale.set(localStorage.getItem('lang'));
    } else {
      if (navigator.language.startsWith('fr')) { locale.set('fr');} 
      else if (navigator.language.startsWith('es')) { locale.set('es');}
      else if (navigator.language.startsWith('de')) { locale.set('de');}
      else { locale.set('en');}
    }
  });

  const setTheme = (newTheme) => {
    theme = newTheme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (!isMenuOpen) {
      isLanguageOpen = false;
    }
  };

  const toggleLanguage = (event) => {
    languageButtonRef = event.currentTarget;
    languageButtonRect = languageButtonRef.getBoundingClientRect();
    isLanguageOpen = !isLanguageOpen;
  };

  const changeLang = (lang) => {
    locale.set(lang);
    localStorage.setItem('lang', lang);
    isLanguageOpen = !isLanguageOpen;
  };
</script>

<div class="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-row items-end gap-2">
  {#if isLanguageOpen && languageButtonRect}
    <div 
      class="flex flex-col gap-2 mb-2 z-[51]"
      style="position: fixed; left: {languageButtonRect.left}px; bottom: {window.innerHeight - languageButtonRect.top}px;"
      transition:fly={{y: 20, duration: 300}}
    >
      <button class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border-none bg-black/30 dark:bg-white/30 backdrop-blur text-white cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center" onclick={() => changeLang('en')} aria-label="English">
        <svg width="20" height="20" viewBox="0 0 512 512">
          <rect width="512" height="512" fill="#012169"/>
          <path d="M0 0 L512 512 M512 0 L0 512" stroke="#ffffff" stroke-width="102.4"/>
          <path d="M256 0 v512 M0 256 h512" stroke="#ffffff" stroke-width="170.7"/>
          <path d="M256 0 v512 M0 256 h512" stroke="#C8102E" stroke-width="102.4"/>
        </svg>
      </button>
      <button class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border-none bg-black/30 dark:bg-white/30 backdrop-blur text-white cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center" onclick={() => changeLang('es')} aria-label="Spanish">
        <svg width="20" height="20" viewBox="0 0 512 512">
          <rect width="512" height="512" fill="#C60B1E"/>
          <rect y="128" width="512" height="256" fill="#FFC400"/>
        </svg>
      </button>
      <button class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border-none bg-black/30 dark:bg-white/30 backdrop-blur text-white cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center" onclick={() => changeLang('de')} aria-label="German">
        <svg width="20" height="20" viewBox="0 0 512 512">
          <rect width="512" height="170.7" fill="#000000"/>
          <rect y="170.7" width="512" height="170.7" fill="#DD0000"/>
          <rect y="341.3" width="512" height="170.7" fill="#FFCE00"/>
        </svg>
      </button>
      <button class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border-none bg-black/30 dark:bg-white/30 backdrop-blur text-white cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center" onclick={() => changeLang('fr')} aria-label="French">
        <svg width="20" height="20" viewBox="0 0 512 512">
          <rect width="170.7" height="512" fill="#002395"/>
          <rect x="170.7" width="170.7" height="512" fill="#FFFFFF"/>
          <rect x="341.3" width="170.7" height="512" fill="#ED2939"/>
        </svg>
      </button>
    </div>
  {/if}

  {#if isMenuOpen}
    <div class="flex flex-row gap-2" in:fly={{x: 150, duration: 400, delay: 0}} out:fly={{x: 150, duration: 400, delay: 0}}>
      {#key 'home'}
        <a href="/" class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border-none bg-black/30 dark:bg-white/30 backdrop-blur text-white cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center no-underline" onclick={toggleMenu} aria-label="Home">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </a>
      {/key}
    </div>
    <div class="flex flex-row gap-2" in:fly={{x: 100, duration: 300, delay: 100}} out:fly={{x: 100, duration: 300, delay: 100}}>
      {#key 'language'}
        <button class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border-none bg-black/30 dark:bg-white/30 backdrop-blur text-white cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center" onclick={toggleLanguage} aria-label="Language">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </button>
      {/key}
    </div>
    <div class="flex flex-row gap-2" in:fly={{x: 50, duration: 200, delay: 200}} out:fly={{x: 50, duration: 200, delay: 200}}>
      {#key 'theme'}
        <button class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border-none bg-black/30 dark:bg-white/30 backdrop-blur text-white cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center" onclick={toggleTheme} aria-label="Theme">
          {#key theme}
            <div in:fly={{y: 20, duration: 300}}>
              {#if theme === 'light'}
                <div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                </div>
              {:else}
                <div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                </div>
              {/if}
            </div>
          {/key}
        </button>
      {/key}
    </div>
  {/if}

  <button class="w-10 h-10 md:w-12 md:h-12 bg-black/30 dark:bg-white/30 backdrop-blur-md rounded-lg md:rounded-xl border-none text-white cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center" onclick={toggleMenu} aria-label="Menu">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  </button>
</div>