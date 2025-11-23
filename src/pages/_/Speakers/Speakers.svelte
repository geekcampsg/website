<script lang="ts">
import { onMount } from 'svelte';

import Speaker from './Speaker.svelte';

interface SpeakerData {
  id: string;
  name: string;
  bio: string;
  imgUrl: { default: string; webp?: string };
  position?: string;
  twitter?: string;
}

interface Props {
  speakers: SpeakerData[];
}

const { speakers }: Props = $props();
let focus = $state<string | undefined>(undefined);

onMount(() => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let toSet: string | undefined;

  function onHashChange() {
    const name = window.location.hash.slice(1);
    if (speakers.find((speaker) => speaker.id === name)) {
      toSet = name;
      timeoutId = setTimeout(updateFocus, 200);
    } else {
      toSet = undefined;
    }
  }
  function updateFocus() {
    focus = toSet;
    timeoutId = null;
    toSet = undefined;
  }

  function onScroll() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    if (toSet) {
      timeoutId = setTimeout(updateFocus, 200);
    }
  }
  window.addEventListener('hashchange', onHashChange);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => {
    window.removeEventListener('hashchange', onHashChange);
    window.removeEventListener('scroll', onScroll, { passive: true });
    if (timeoutId) clearTimeout(timeoutId);
  };
});

$effect(() => {
  if (typeof window !== 'undefined' && focus === undefined) {
    window.location.hash = '😘';
  }
});
</script>

{#each speakers as speaker}
  <Speaker
    {...speaker}
    focused={focus === speaker.id}
    onFocus={(id) => {focus = id}}
  />
{/each}
