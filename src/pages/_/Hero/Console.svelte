<script lang="ts">
import type { Snippet } from 'svelte';
import Terminal from './Terminal.svelte';

interface Props {
  data?: Snippet;
}

const { data }: Props = $props();
let gameMode = $state(false);
</script>

{#if gameMode}
  {#await import('./Game/index.svelte')}
    Loading game bundles...
  {:then { default: Game }}
    <Game
      onGameEvent={(event) => {
        if (event === 'quit') {
          gameMode = false;
        }
      }}
    />
  {:catch}
    Fail to load.
  {/await}
{:else}
  <div>
    {@render data?.()}
  </div>
  <Terminal
    onTerminalEvent={(event: string) => {
      if (event === 'gameOn') {
        gameMode = true;
      }
    }}
  />
{/if}
<style>
  div {
    margin-top: -1em;
  }
</style>