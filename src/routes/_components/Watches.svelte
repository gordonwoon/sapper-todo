<script>
  import Watch from 'routes/_components/Watch.svelte'

  export let watches = []
  export let tasks = []
</script>

<style lang="scss">
  .grid-container {
    grid-gap: 1rem;
  }
</style>

<div class="grid-container">
  {#each watches as watch}
    <Watch tags={watch.tags} {tasks} />
  {/each}
</div>
