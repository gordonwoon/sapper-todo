<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let parentCommentId

  let comment = {
    content: '',
    parent: parentCommentId
  }

  async function submit () {
    const newComment = {
      score: 0,
      _id: Math.round((Math.random() * 99999)),
      content: comment.content,
      user: {
        username: 'test user 2',
      },
      createdAt: 'a few seconds ago',
      replies: []
    }
    dispatch('created', { comment: newComment })
  }
</script>

<form
  class="reply-form"
  on:submit|preventDefault="{submit}"
>
  <textarea
    class="reply-input"
    bind:value="{comment.content}"
  ></textarea>
  <div class="reply-buttons-container">
    <button
      type="button"
      class="reply-button text-button"
      on:click="{() => dispatch('cancel')}"
    >
      Cancel
    </button>
    <button
      class="reply-button primary-button"
    >
      Reply
    </button>
  </div>
</form>
