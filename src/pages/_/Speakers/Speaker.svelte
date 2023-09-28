<script>
import { Image } from 'astro:assets';

  import { createEventDispatcher } from 'svelte';
  import { crossfade, fade, scale } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import xss from 'xss';

  export let name;
  export let id;
  export let imgUrl;
  export let position;
  export let bio;
  export let twitter;
  export let focused;

  const dispatch = createEventDispatcher();

  const easing = cubicInOut;
  const duration = 500;

  const [crossfadeIn, crossfadeOut] = crossfade({
    fallback: fade,
    duration,
    easing,
  });

  function clickOrScrollOutside(node, callback) {
    function onClick(event) {
      if (!node.contains(event.target)) {
        callback();
      }
    }
    function onScroll() {
      callback();
    }
    document.addEventListener('click', onClick, true);
    document.addEventListener('scroll', onScroll, { passive: true });
    return {
      destroy() {
        document.removeEventListener('click', onClick, true);
        document.removeEventListener('scroll', onScroll, { passive: true });
      },
    };
  }
  // set background to black after transition is done
  // this allow us to scale the backdrop without messing with the measurements
  // but the backdrop can't cover all if the detail is scrollable
  let detail;

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div {id}>
  {#if focused}
    <div
      class="detail"
      bind:this={detail}
      use:clickOrScrollOutside={() => dispatch('focus', undefined)}
    >
      <div
        class="backdrop"
        transition:scale={{ duration, easing }}
        on:introend={() => (detail.style.background = 'black')}
        on:outrostart={() => (detail.style.background = 'unset')}
      />
      <picture>
		{#if imgUrl.webp}
        <source type="image/webp" srcset={imgUrl.webp} />
		{/if}
        <img
          in:crossfadeIn={{ key: 'img' }}
          out:crossfadeOut={{ key: 'img' }}
          decoding="async"
          loading="lazy"
          alt={name}
          src={imgUrl.default}
        />
      </picture>
      <div>
        <div
          class="name"
          in:crossfadeIn={{ key: 'name' }}
          out:crossfadeOut={{ key: 'name' }}
        >
          {name}
        </div>
        {#if position}
          <br />
          <div
            class="title"
            in:crossfadeIn={{ key: 'title' }}
            out:crossfadeOut={{ key: 'title' }}
          >
            {position}
          </div>
        {/if}
        {#if twitter}
          <br />
          <a
            transition:scale={{ easing, duration }}
            style="display:inline-block;"
            href="https://twitter.com/{twitter}">@{twitter}</a
          >
        {/if}
        <p out:fade={{ duration, easing }} in:scale={{ duration, easing }}>
          {@html xss(bio)}
        </p>
      </div>
    </div>
  {:else}
    <figure on:click={() => dispatch('focus', id)}>
      <picture>
        <source type="image/webp" srcset={imgUrl.webp} />
        <img
          in:crossfadeIn={{ key: 'img' }}
          out:crossfadeOut={{ key: 'img' }}
          decoding="async"
          loading="lazy"
          alt={name}
          src={imgUrl.default}
        />
      </picture>
      <figcaption>
        <div
          class="name"
          in:crossfadeIn={{ key: 'name' }}
          out:crossfadeOut={{ key: 'name' }}
        >
          {name}
        </div>
        {#if position}
          <br />
          <div
            class="title"
            in:crossfadeIn={{ key: 'title' }}
            out:crossfadeOut={{ key: 'title' }}
          >
            {position}
          </div>{/if}
      </figcaption>
    </figure>
  {/if}
</div>

<style>
  figure {
    height: 0;
    padding-bottom: 100%;
    position: relative;
    font-size: 1rem;
    cursor: pointer;
  }
  figure::after {
    content: '';
    background: red;
    height: 75%;
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 0;
    background: linear-gradient(rgba(240, 207, 97, 0), rgba(43, 41, 45, 0.8));
  }
  figure img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    object-fit: cover;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    z-index: 2;
    padding: 0 0.6rem 0.6rem;
  }

  .name,
  .title {
    font-family: var(--title-font);
    line-height: 1;
    color: #fff;
    text-transform: uppercase;
    display: inline-block;
  }

  .name {
    font-size: 1.6875em;
  }
  .title {
    font-size: 0.625em;
  }

  @media screen and (min-width: 375px) {
    .title {
      font-size: 0.84em;
    }
  }

  @media screen and (min-width: 768px) {
    figcaption {
      padding: 0 1.5rem 1rem;
    }
    .name {
      font-size: 2.125em;
    }
    .title {
      font-size: 1.3em;
    }
  }

  @media screen and (min-width: 960px) {
    .name {
      font-size: 2.4em;
    }
  }

  .detail {
    position: fixed;
    left: 0rem;
    right: 0rem;
    top: 50vh;
    transform: translateY(-50%);
    max-height: 100vh;
    max-width: 100vw;
    z-index: 3;
    margin: auto;
    display: grid;
    grid-template: 100px 1fr / 1fr;
    gap: var(--padding);
    align-items: center;
    padding: var(--padding);
    overflow: scroll;
  }
  .backdrop {
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  .detail img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: auto;
  }
  @media screen and (min-width: 1280px) {
    .detail {
      grid-template: 1fr / 1fr 4fr;
      max-width: 80vw;
    }
    .detail img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }
  p {
    word-break: break-word;
    white-space: pre-wrap;
  }
</style>
