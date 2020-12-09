<script>
  import { onMount, onDestroy } from 'svelte'
  import Card from 'components/Card.svelte'
  import Task from 'routes/_components/Task.svelte';
  import taskStore from 'stores/task.js'

  export let tags = []
  export let tasks = { tasks: [] }
  export let id
  export let handleDragStart
  export let handleDragOver
  export let handleDrop

  let unsubscribeTask

  onMount(() => {
    unsubscribeTask = taskStore.subscribe(state => (tasks = state))
  })

  onDestroy(() => {
    if (unsubscribeTask) unsubscribeWatch()
  })

  let todoTasks = [],
    doneTasks = [],
    inprogressTasks = [],
    uncategorizedTasks = []


  $: tasks.tasks.forEach(task => {
    if (task.tags.every(tag => tags.includes(tag))) {
      switch (task.status) {
        case 'todo': $: todoTasks = todoTasks.concat(task); break;
        case 'inprogress': $: inprogressTasks = inprogressTasks.concat(task); break;
        case 'done': $: doneTasks = doneTasks.concat(task); break;
        default: $: uncategorizedTasks = uncategorizedTasks.concat(task); break;
      }
    }
  })
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';

  section {
    width: 24rem;
    min-height: 3rem;
  }
  .title {
    margin-bottom: 1rem;
  }
  .task-container {
    border-radius: 2px;
    color: black;
    margin: .5rem 0;
  }
  .inprogress {
    padding: 1rem 0;
    background-color: $pastel-green;
  }
  .todo {
    padding: 1rem 0;
    background-color: $pastel-red;
  }
  .done {
    padding: 1rem 0;
    background-color: $pastel-blue;
    opacity: 0.75;
  }
  hr {
    margin: 0;
  }
</style>

<section>
  <Card {id} draggable {handleDragStart} {handleDragOver} {handleDrop}>
    <div class="title">
      {#each tags as tag}@{tag}{/each}
    </div>
    {#if !tasks.error}
      {#if inprogressTasks.length}
        <div class="inprogress task-container">
          {#each inprogressTasks as item}
            <Task task={item} />
          {/each}
        </div>
      {/if}
      {#if todoTasks.length}
        <div class="todo task-container">
          {#each todoTasks as item}
          <Task task={item} />
          {/each}
        </div>
      {/if}
      {#if doneTasks.length}
        <div class="done task-container">
          {#each doneTasks as item}
          <Task task={item} strike/>
          {/each}
        </div>
      {/if}
    {:else}
      <p style="color: red">{tasks.error.message}</p>
    {/if}
  </Card>
</section>
