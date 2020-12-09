<script>
  import Watches from 'routes/_components/Watches.svelte'
  import { onMount } from 'svelte'
  import { compile } from 'routes/_helper/query.js'
  import taskStore from 'stores/task.js'

  let query
  let inputRef

  const handleSubmit = async () => {
    const { action, tags, task, status = 'todo' } = compile(query)
    if (action && task) {
      const res = await fetch('/task.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, tags, status })
      }).then(res => res.json())
      taskStore.update(() => ({ tasks: res }))
    }
    query = ''
  }

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

    input {
      width: 60rem;
      height: 3.5rem;
    }
  }
</style>

<div>
  <div class="input-container">
    <form on:submit|preventDefault={handleSubmit}>
      <input
        bind:this={inputRef}
        bind:value={query}
        placeholder="Add tasks here"
        type="text" />
    </form>
  </div>
  <Watches />
</div>
