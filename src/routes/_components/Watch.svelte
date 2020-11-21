<script>
  import Card from 'components/Card.svelte'

  export let tags = []
  export let tasks = []
  export let id
  export let handleDragStart
  export let handleDragOver
  export let handleDrop

  let filteredTasks

  $: filteredTasks = tasks.filter(task =>
    task.tags.every(tag => tags.includes(tag))
  )
</script>

<Card {id} draggable {handleDragStart} {handleDragOver} {handleDrop}>
  <ul>
    {#each filteredTasks as task}
      <li>{task.title}</li>
    {/each}
  </ul>
</Card>
