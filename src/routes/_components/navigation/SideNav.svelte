<script>
  import { onMount, onDestroy } from 'svelte'
  import Icon from 'components/Icon.svelte'
  import { fade } from 'svelte/transition';
  import { linear } from 'svelte/easing';
  import tagStore from 'stores/tags.js'

  export let expand

  let tags = { tags: [] }
  let unsubscribeTag

  onMount(() => {
    unsubscribeTag = tagStore.subscribe(state => (tags = state))
  })

  onDestroy(() => {
    if (unsubscribeTag) unsubscribeTag()
  })
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';

  .side-nav {
    width: 7rem;
    padding: 2rem 1.5rem;
    gap: 1rem;
    transition: 0.15s;
    align-items: flex-start;
    text-align: left;
    &.expand {
      width: 20rem;
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
  {#if !tags.error}
    {#each tags.tags as tag}
      <div class="flex-row flex-align-items-center">
        <Icon iconText={tag.name} iconClass="margin-right-medium" border medium />
        {#if expand}<div transition:fade={{ duration: 150, easing: linear }} >{tag.name}</div>{/if}
      </div>
    {/each}
  {:else}
    <p style="color: red">{tags.error.message}</p>
  {/if}
</div>
