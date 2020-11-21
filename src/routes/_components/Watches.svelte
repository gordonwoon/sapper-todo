<script>
  import Watch from 'routes/_components/Watch.svelte'

  export let watches = []
  export let tasks = []

  let handleDragStart = ev => {
    ev.dataTransfer.setData('text', ev.target.id)
  }

  let handleDragOver = ev => {
    ev.preventDefault()
  }

  let handleDrop = ev => {
    const sourceId = ev.dataTransfer.getData('text');
    const targetId = ev.target.id;

    const temp = watches[sourceId];
    watches[sourceId] = watches[targetId];
    watches[targetId] = temp;
  }
</script>

<style lang="scss">
  .grid-container {
    grid-gap: 1rem;
  }
</style>

<div class="grid-container">
  {#each watches as watch, id}
    <Watch
      tags={watch.tags}
      {tasks}
      {id}
      {handleDragStart}
      {handleDragOver}
      {handleDrop} />
  {/each}
</div>
