<script>
  import xss from 'xss';
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';
  import preferReducedMotion from '@src/utils/prefer-reduced-motion';
  import { formatTime } from '@src/utils/date-format';

  export let scheduleTalks;
  export let tracks;

  let selectedTracks = [...tracks];
  $: talks = scheduleTalks.filter(
    (talk) => !talk.track || selectedTracks.includes(talk.track)
  );

  function getTrackColor(track) {
    switch (track) {
      case '0':
        return '#258fa7';
      case '1':
        return '#b59317';
      default:
        return 'var(--green)';
    }
  }
</script>

<div>
  {#each tracks as track}
    <label
      style:--track-color={getTrackColor(track)}
      style:opacity={selectedTracks.includes(track) ? 1 : 0.4}
    >
      <input bind:group={selectedTracks} type="checkbox" value={track} />Track {track}</label
    >
  {/each}
</div>
<ul>
  {#each talks as talk (talk.id)}
    <li
      id={talk.id}
      transition:fade={$preferReducedMotion ? { duration: 0 } : undefined}
      animate:flip={{ duration: $preferReducedMotion ? 0 : 200 }}
      style:--track-color={getTrackColor(talk.track)}
    >
      <h3>{talk.title}</h3>
      <time dateTime={talk.startTime}
        >{`${formatTime(talk.startTime)} - ${formatTime(talk.endTime)}`}</time
      >
      {#if talk.speakers}
        <div class="speakers">
          {#each talk.speakers as speaker}
            <a href={`#${speaker.id}`}>
              <picture>
                <source type="image/webp" srcset={speaker.imgUrl.webp} />
                <img
                  loading="lazy"
                  src={speaker.imgUrl.default}
                  alt={speaker.name}
                />
              </picture>
              {speaker.name}
            </a>
          {/each}
        </div>
      {/if}
      {#if talk.track}
        <div class="track">
          Track {talk.track}
        </div>
      {/if}
      {#if talk.summary}
        <p>{@html xss(talk.summary)}</p>
      {/if}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    margin-left: 0;
  }

  li {
    position: relative;
    padding: 0 0 3.5rem 2rem;
    margin-bottom: 0;
  }

  li::before {
    content: '';
    background: var(--track-color);
    border-radius: 100%;
    width: 1.38888rem;
    height: 1.38888rem;
    position: absolute;
    margin-left: -1px;
    left: 0;
    top: 0.277777778rem;
    z-index: 1;
  }

  li::after {
    content: '';
    position: absolute;
    top: 0.277777778rem;
    bottom: -0.277777778rem;
    border-left: 1px solid #2b292d;
    left: 0;
    margin-left: 0.625rem;
  }

  li:last-child::after {
    display: none;
  }

  time {
    display: block;
    font-size: 1.78rem;
    line-height: 1;
    margin: 0.5rem 0;
  }

  .speakers {
    display: block;
    font-weight: normal;
    line-height: 1;
    font-size: 1.5rem;
    text-transform: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.25em;
    margin-right: 1rem;
  }

  img {
    width: 1em;
    height: 1em;
    border-radius: 50%;
  }

  .track,
  label {
    margin-bottom: 1rem;
    background: var(--track-color);
    color: black;
    display: inline-block;
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    font-size: 1rem;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in-out;
  }

  @media screen and (min-width: 768px) {
    ul {
      padding-left: 13rem;
    }
    time {
      position: absolute;
      left: -13rem;
      top: 0;
      margin: 0;
    }

    li::before {
      transform: translateX(-50%);
    }
    li::after {
      left: -1px;
      margin-left: 0;
    }
  }
  input {
    position: absolute;
    opacity: 0;
  }
</style>
