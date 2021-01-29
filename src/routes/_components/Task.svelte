<script>
  import Particles from 'components/effects/Particles.svelte'
  import Shine from 'components/effects/Shine.svelte'

  export let task
  export let strike = false
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';
  @keyframes appear {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
  .task {
    grid-template-columns: 16px 1fr;
    grid-gap: .8rem;
    align-items: flex-start;
    animation-name: appear;
    animation-duration: 0.25s;
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
  .dot {
    width: 16px;
    height: 16px;
  }
  span {
    margin-top: 2px;
  }
</style>

<div class="task grid-container" class:strike contenteditable aria-multiline>
  <!-- {#if task.status !== 'done'}
    <input type="checkbox" />
  {/if} -->
  <div class="dot"><Shine rank={task.priority}/></div>
  <span>{task.task}</span>
</div>
