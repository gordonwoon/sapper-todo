<script>
  import Card from 'components/Card.svelte'
  import { splitBy } from 'routes/_helper/array.js'

  export let tags = []
  export let tasks = []
  export let id
  export let handleDragStart
  export let handleDragOver
  export let handleDrop

  let todoTasks = [], doneTasks = [], filteredTasks = []
  $: filteredTasks = tasks.filter(task =>
    task.tags.every(tag => tags.includes(tag))
  )
  $: [todoTasks, doneTasks] = splitBy(filteredTasks, task => task.status === 'todo')
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
    <span>
      {#each tags as tag}@{tag}{/each}
    </span>
    <div class="watch">
      {#each todoTasks as item}
        <div class="task" contenteditable aria-multiline>{item.task}</div>
      {/each}
    </div>
    <hr />
    <div class="done">
      {#each doneTasks as item}
        <div class="task" aria-multiline>{item.task}</div>
      {/each}
    </div>
  </Card>
</section>
