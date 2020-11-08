<script>
  import { goto } from '@sapper/app';
  import ButtonGroup from 'components/ButtonGroup.svelte';

  export let story;

  let inProgress = false;

  async function submit() {
    inProgress = true;
    if (story._id) {
      console.log('Update story with id', story._id);
    } else {
      console.log('Create a new story');
    }
    // redirect to the story you just created/updated
    goto(`/story/123`);
  }
</script>

<form class="story-form" on:submit|preventDefault={submit}>
  <input
    class="text-input"
    bind:value={story.title}
    type="text"
    placeholder="Title"
    required />
  <ButtonGroup
    bind:value={story.type}
    disabled={story._id}
    buttons={[{ value: 'link', title: 'Link' }, { value: 'text', title: 'Text' }]} />
  {#if story.type === 'link'}
    <input
      class="text-input link-input content-input"
      bind:value={story.content}
      type="url"
      placeholder="URL"
      required />
  {:else}
    <textarea
      class="content-text-input content-input"
      bind:value={story.content}
      placeholder="Text (optional)" />
  {/if}
  <button class="primary-button submit-button" disabled={inProgress}>
    {#if story._id}SAVE{:else}POST{/if}
  </button>
</form>
