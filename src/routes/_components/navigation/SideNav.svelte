<script>
  import Icon from 'components/Icon.svelte'
  import { fade } from 'svelte/transition';
  import { linear } from 'svelte/easing';
  export let expand
  export let tags
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';

  .side-nav {
    width: 6rem;
    padding: 1.8rem;
    gap: 1rem;
    transition: 0.15s;
    align-items: flex-start;
    text-align: left;
    &.expand {
      width: 20rem;
    }
  }
  .nav-item {
    white-space: nowrap;
    > * {
      display: inline-block;
    }
  }

  @media only screen and (max-width: 600px) {
    .side-nav {
      width: 0px;
      padding: 0;
      opacity: 0;
      &.expand {
        padding: 1.8rem;
        opacity: 1;
      }
    }
  }
</style>

<div class="side-nav flex-column" class:expand>
  {#each tags as tag}
    <div class="nav-item">
      <Icon iconText={tag.name} iconClass="margin-right-small" large />
      {#if expand}<div transition:fade={{ duration: 150, easing: linear }} >{tag.name}</div>{/if}
    </div>
  {/each}
</div>
