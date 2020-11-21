<script context="module">
  export async function preload({ params }) {
    const watches = await this.fetch(`/watch.json`).then(res => res.json())
    const tasks = await this.fetch(`/task.json`).then(res => res.json())

    return { watches, tasks }
  }
</script>

<script>
  import Watches from 'routes/_components/Watches.svelte'
  import Input from 'components/Input.svelte';
  import { onMount } from 'svelte'

  export let watches
  export let tasks

  let query
  let inputRef
  onMount(() => {
    setTimeout(() => inputRef.focus(), 0)
  })
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';
  .input-container {
    width: 60rem;
    height: 5rem;
    margin: 3.2rem auto 1.6rem auto;

    > :global(input) {
    width: 60rem;
    height: 3.5rem;
    }
  }
</style>

<div>
  <div class="input-container">
    <Input bind:ref={inputRef} bind:value={query} />
  </div>
  <Watches {watches} {tasks} />
</div>
