<script>
  import ReplyInput from './_ReplyInput.svelte';
  export let comment,
    showReplyForm = false;

  function addReply({ detail }) {
    comment.replies = [...comment.replies, detail.comment];
    showReplyForm = false;
  }
</script>

<div class="comment">
  <div class="details">
    <div class="voter">
      <span class="upvoter"> <span class="arrow" /> </span>
      <span class="score">{comment.score}</span>
    </div>

    <div class="main">
      <div class="byline">
        <span class="author">{comment.user.username}</span>
        <span class="date">{comment.createdAt}</span>
        <span
          class="show-reply-form-button"
          on:click={() => (showReplyForm = true)}>reply</span>
      </div>
      <p class="comment-content">{comment.content}</p>
    </div>
  </div>
  {#if showReplyForm}
    <ReplyInput
      parentCommentId={comment._id}
      on:created={addReply}
      on:cancel={() => (showReplyForm = false)} />
  {/if}
  {#if comment.replies && comment.replies.length}
    <div class="replies">
      {#each comment.replies as reply (reply._id)}
        <svelte:self comment={reply} />
      {/each}
    </div>
  {/if}
</div>
