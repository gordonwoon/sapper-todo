<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let comment = {
    content: '',
    parent: null
  };

  function submit() {
    // this should eventually be returned from the server
    const newComment = {
      score: 0,
      _id: Math.round(Math.random() * 99999),
      content: comment.content,
      user: {
        username: 'test user'
      },
      createdAt: 'a few seconds ago',
      replies: []
    };

    dispatch('created', { comment: newComment });

    comment = {
      content: '',
      parent: null
    };
  }
</script>

<form class="comment-form" on:submit|preventDefault={submit}>
  <textarea
    class="comment-input"
    bind:value={comment.content}
    placeholder="Write your comment"
    required />

  <button class="add-comment-button primary-button"> Add Comment </button>
</form>
z
