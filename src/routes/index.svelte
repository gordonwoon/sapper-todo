<script context="module">
  export async function preload({ params }) {
    const watches = await this.fetch(`/watch.json`).then(res => res.json())
    const tasks = await this.fetch(`/task.json`).then(res => res.json())

    return { watches, tasks }
  }
</script>

<script>
  import Watches from 'routes/_components/Watches.svelte'
  import { onMount, tick } from 'svelte'

  export let watches
  export let tasks

  let query
  let inputRef
  onMount(async () => {
    // await tick()
    // inputRef.focus()
    setTimeout(() => inputRef.focus(), 0)
  })
</script>

<style lang="scss">
  .query-container {
    width: 60rem;
    height: 5rem;
    margin: 3.2rem auto 1.6rem auto;
  }
  input {
    width: 60rem;
    height: 3.5rem;
  }
</style>

<div>
  <div class="query-container">
    <input bind:this={inputRef} bind:value={query} />
  </div>
  <Watches {watches} {tasks} />
</div>
