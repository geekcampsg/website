import { writable } from 'svelte/store';

export default writable(false, (set) => {
  if (typeof window === 'undefined') return;
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  function onUpdate() {
    set(mediaQuery.matches);
  }
  onUpdate();
  mediaQuery.addEventListener('change', onUpdate);
  return () => mediaQuery.removeEventListener('chnage', onUpdate);
});
