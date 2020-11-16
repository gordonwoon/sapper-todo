<script>
  export let tags = []
  export let tasks = []

  let filteredTasks = tasks.filter(task => task.tags.every(tag => tags.includes(tag)))
</script>

<ul>
  {#each filteredTasks as task}
    <li>{task.title}</li>
  {/each}
</ul>
