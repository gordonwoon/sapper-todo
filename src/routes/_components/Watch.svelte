<script>
  import Card from 'components/Card.svelte'
  import Task from 'routes/_components/Task.svelte'

  export let id
  export let handleDragStart
  export let handleDragOver
  export let handleDrop
  export let watch

  $: tags = watch.tags
  $: tasks = watch.tasks
  $: todoTasks = tasks.todoTasks
  $: inprogressTasks = tasks.inprogressTasks
  $: doneTasks = tasks.doneTasks
  $: priority = tasks.priority
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
</style>

<section>
  <Card {id} draggable {handleDragStart} {handleDragOver} {handleDrop}>
    <div class="title">
      {#each tags as tag}@{tag}{/each}
      {priority}
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
