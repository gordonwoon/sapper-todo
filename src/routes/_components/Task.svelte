<script>
  export let task
  export let status
  export let strike
</script>

<style lang="scss">
  .task {
    margin: .2rem 0;
    padding: 0 .5rem;
  }
  .grid {
    grid-template-columns: 16px 1fr;
    grid-gap: .5rem;
    align-items: flex-start;
  }
  .strike {
    text-decoration: line-through;
  }
  span {
    margin-top: 2px;
  }
</style>

<div class="task grid-container" class:grid={task.status !== 'done'} class:strike contenteditable aria-multiline>
  {#if task.status !== 'done'}
    <input type="checkbox" />
  {/if}
  <span>{task.task}</span>
</div>
