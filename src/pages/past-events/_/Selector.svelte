<script>
  export let schedules;
  let selectedYear = schedules[0][1];

  $: if (typeof window !== 'undefined') {
    window.location.hash = selectedYear;
  }
</script>

<ul>
  {#each schedules as [name, year]}
    <li class:selected={selectedYear === year}>
      <label>
        <input
          type="radio"
          name="year"
          value={year}
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
