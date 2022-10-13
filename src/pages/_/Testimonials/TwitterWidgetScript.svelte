<script>
  import { onMount } from 'svelte';
  onMount(() => {
    const script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src = 'https://platform.twitter.com/widgets.js';
    document.body.appendChild(script);
  })
</script>

<div />