<script context="module">
  import { watchStore } from 'stores/watch.js'
  import { taskStore } from 'stores/task.js'

  watchStore.fetchAll()
  taskStore.fetchAll()
</script>

<script>
  import { onMount, onDestroy } from 'svelte'
  import Watch from 'routes/_components/Watch.svelte'
  import { derivedWatchStore } from 'stores/derived-watch.js'

  let watches = { watches: [] }
  let unsubscribeWatch

  onMount(() => {
    unsubscribeWatch = derivedWatchStore.subscribe(state => (watches = state))
  })

  onDestroy(() => {
    if (unsubscribeWatch) unsubscribeWatch()
  })


  let handleDragStart = ev => {
    ev.dataTransfer.setData('text', ev.target.id)
  }

  let handleDragOver = ev => {
    ev.preventDefault()
  }

  let handleDrop = ev => {
    const sourceId = ev.dataTransfer.getData('text')
    const targetId = ev.target.id

    const temp = watches.watches[sourceId]
    watches.watches[sourceId] = watches.watches[targetId]
    watches.watches[targetId] = temp
  }
</script>

<style lang="scss">
  .grid-container {
    // grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-template-columns: repeat(auto-fill, 24rem);
    grid-gap: 1rem;
    align-items: flex-start;
  }
</style>

<div class="grid-container">
  {#if !watches.error}
    {#each watches.watches as watch, id}
      <Watch
        bind:watch
        {id}
        {handleDragStart}
        {handleDragOver}
        {handleDrop} />
    {/each}
  {:else}
    <p style="color: red">{watches.error.message}</p>
  {/if}
</div>
