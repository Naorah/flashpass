<script lang="ts">
  import Menu from '$lib/components/home/Menu.svelte';
	import '../app.css';

  let { children } = $props();
</script>

{#if children}
  {@render children()}
{/if}

<Menu />