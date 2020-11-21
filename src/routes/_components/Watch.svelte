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

<style lang="scss">
  @import 'src/styles/theme.scss';

  section {
    width: 24rem;
    min-height: 3rem;
  }
  .watch {
    margin-top: 1rem;
  }
  .done {
    margin-bottom: 1rem;
    color: $border-color;
  }
  .task {
    margin: 1rem 0;
  }
  hr {
    margin: 0;
  }
</style>

<section>
  <Card {id} draggable {handleDragStart} {handleDragOver} {handleDrop}>
    <span>Title</span>
    <div class="watch">
      {#each filteredTasks as task}
        <div class="task" contenteditable aria-multiline>{task.title}</div>
      {/each}
    </div>
    <hr />
    <div class="done">
      {#each filteredTasks as task}
        <div class="task" aria-multiline>{task.title}</div>
      {/each}
    </div>
  </Card>
</section>
