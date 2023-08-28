<script>
  import Terminal from './Terminal.svelte';
  let gameMode = false;
</script>

{#if gameMode}
  {#await import('./Game/index.svelte')}
    Loading game bundles...
  {:then { default: Component }}
    <Component
      on:quit={() => {
        gameMode = false;
      }}
    />
  {:catch}
    Fail to load.
  {/await}
{:else}
  <div>
    <slot name="data" />
  </div>
  <Terminal
    on:gameOn={() => {
      gameMode = true;
    }}
  />
{/if}
