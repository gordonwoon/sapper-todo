<script>
  export let comment
</script>

<div class="comment">
  <div class="details">

    <div class="voter">
      <span class="upvoter">
        <span class="arrow"></span>
      </span>
      <span class="score">{comment.score}</span>
    </div>

    <div class="main">
      <div class="byline">
        <span class="author">{comment.user.username}</span>
        <span class="date">{comment.createdAt}</span>
      </div>
      <p class="comment-content">{comment.content}</p>
    </div>
  </div>
  {#if comment.replies && comment.replies.length}
    <div class="replies">
      {#each comment.replies as reply (reply._id)}
        <svelte:self
          comment="{reply}"
        />
      {/each}
    </div>
  {/if}
</div>
