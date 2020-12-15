<script>
  export let task
  export let strike = false
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';
  $priority-width: 3px;
  .task {
    margin: .2rem 0;
    padding: 0 .5rem;
  }
  .grid {
    grid-template-columns: 16px 1fr;
    grid-gap: .8rem;
    align-items: flex-start;
  }
  .strike {
    text-decoration: line-through;
  }
  span {
    margin-top: 2px;
    &.A { border-right: $priority-width solid red }
    &.B { border-right: $priority-width solid yellow }
    &.C { border-right: $priority-width solid lightsalmon }
    &.D { border-right: $priority-width solid lightgreen }
    &.E { border-right: $priority-width solid lightseagreen }
  }
</style>

<div class="task grid-container" class:grid={task.status !== 'done'} class:strike contenteditable aria-multiline>
  {#if task.status !== 'done'}
    <input type="checkbox" />
  {/if}
  <span class={task.priority}>{task.task}</span>
</div>
