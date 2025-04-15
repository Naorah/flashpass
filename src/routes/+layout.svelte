<script lang="ts">
	import '../app.css';

  let { children } = $props();
</script>

{#if children}
  {@render children()}
{/if}