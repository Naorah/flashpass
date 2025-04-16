<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let { storm_intensity, flash_power, min_delay, max_delay, flash_enabled=$bindable() } = $props();

  let flashes = $state([]);

  function triggerFlash() {
    const id = crypto.randomUUID();
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const max_strength = flash_power + Math.random() * 0.7;
    const min_strength = flash_power - Math.random() * 0.7;
    const strength = min_strength + Math.random() * max_strength;
    const blur = 100 + Math.random() * 100;

    flashes = [...flashes, { id, x, y, strength, blur }];

    // Supprimer le flash après animation
    setTimeout(() => {
      flashes = flashes.filter(f => f.id !== id);
    }, 500);
  }

  let intervalId;

  onMount(() => {
    function loop() {
      const delay = min_delay + Math.random() * (max_delay - min_delay);
      const burstCount = 1 + Math.floor(Math.random() * storm_intensity);
      intervalId = setTimeout(() => {
        if (flash_enabled) {
          for (let i = 0; i < burstCount; i++) {
            setTimeout(() => {
              triggerFlash();
            }, Math.random() * 200);
          }
        };
        loop();
      }, delay);
    }

    loop();

    return () => clearTimeout(intervalId);
  });

  onDestroy(() => clearTimeout(intervalId));
</script>

<style>
  .flash {
    animation: flash 0.4s;
  }

  @keyframes flash {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>

<!-- Overlay -->
<div class="inset-0 pointer-events-none z-[9999]">
  {#each flashes as { id, x, y, strength, blur } (id)}
    <div
      class="absolute flash rounded-full bg-white"
      style="
        left: {x}%;
        top: {y}%;
        width: {blur}px;
        height: {blur}px;
        opacity: {strength};
        transform: translate(-50%, -50%);
        filter: blur({blur / 4}px);
      "
    ></div>
  {/each}
</div>