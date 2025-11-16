<script lang="ts">
import type schedule2024 from '@src/data/schedules/2024';

interface Props {
  schedules: Array<[string, typeof schedule2024]>;
}

const { schedules }: Props = $props();
let selectedYear = $state(schedules[0][1].year);

$effect(() => {
  if (typeof window !== 'undefined') {
    window.location.hash = String(selectedYear);
  }
});
</script>

<ul>
  {#each schedules as [name, schedule]}
    <li class:selected={selectedYear === schedule.year}>
      <label>
        <input
          type="radio"
          name="year"
          value={schedule.year}
          bind:group={selectedYear}
        />
        {name}
      </label>
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0;
    padding: 0;
  }
  input {
    opacity: 0;
    position: absolute;
  }
  li {
    list-style-type: none;
    line-height: 1.5;
    margin-bottom: 0.8rem;
    font-size: 1.5rem;
  }
  label {
    cursor: pointer;
    display: block;
  }
  li.selected,
  li:hover {
    color: var(--green);
  }
</style>
