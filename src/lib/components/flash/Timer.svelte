<script>
  import { onDestroy, onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  let { duration } = $props(); // Durée en secondes
  let timeLeft = $state(duration);
  let started = $state(false);
  let timerId = $state(null);
  const dispatch = createEventDispatcher();

  let minutes = $derived(Math.floor(timeLeft / 60));
  let seconds = $derived(timeLeft % 60);
  let formattedTime = $derived(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
  let isExpired = $derived(timeLeft <= 0);

  function start() {
    if (!started) {
      timeLeft = duration;
      started = true;
      timerId = setInterval(() => {
        timeLeft = Math.max(0, timeLeft - 1);
        if (timeLeft <= 0) {
          dispatch('timer_end');
        }
      }, 1000);
    }
  }

  onDestroy(() => {
    if (timerId) clearInterval(timerId);
  });

  onMount(() => {
    start();
  });
</script>

<div class={`text-sm font-mono ${isExpired ? 'text-red-500 animate-pulse' : 'text-green-500'}`}>
  {formattedTime}
</div>
