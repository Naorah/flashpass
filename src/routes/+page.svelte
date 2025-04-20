<script>
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';

  import Hero from '$lib/components/home/Hero.svelte';
  import Problem from '$lib/components/home/Problem.svelte';
  import Avantage from '$lib/components/home/Avantage.svelte';
  import HowItWorks from '$lib/components/home/HowItWorks.svelte';
  import Trust from '$lib/components/home/Trust.svelte';
  import CTA from '$lib/components/home/CTA.svelte';
  import Footer from '$lib/components/home/Footer.svelte';
</script>

<svelte:head>
  <title>FlashPass - Partagez vos mots de passe en toute sécurité</title>
  <meta name="description" content="FlashPass vous permet de partager des mots de passe de façon sécurisée, chiffrée et éphémère via une connexion P2P." />
</svelte:head>

<main>
  <Hero />
  <Problem />
  <Avantage />
  <HowItWorks />
  <Trust />
  <CTA />
  <Footer />
</main>