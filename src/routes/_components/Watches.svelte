<script>
  import Watch from 'routes/_components/Watch.svelte'

  export let watches = []
  export let tasks = []
</script>

<div>
  {#each watches as watch}
    <Watch tags={watch.tags} {tasks} />
  {/each}
</div>
