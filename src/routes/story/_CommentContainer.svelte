<script>
  import Comment from './_Comment.svelte';
  import CommentInput from './_CommentInput.svelte';
  let comments = [
    {
      score: 0,
      _id: '1',
      content: 'first comment',
      user: {
        username: 'test user'
      },
      createdAt: '5 minutes ago',
      replies: []
    },
    {
      score: 0,
      _id: '2',
      content: 'second comment',
      user: {
        username: 'test user 2'
      },
      createdAt: '3 minutes ago',
      replies: [
        {
          score: 0,
          _id: '3',
          content: 'first reply',
          user: {
            username: 'test user'
          },
          createdAt: '2 minutes ago',
          replies: [
            {
              score: 0,
              _id: '3',
              content: 'first reply',
              user: {
                username: 'test user'
              },
              createdAt: '2 minutes ago',
              replies: []
            }
          ]
        }
      ]
    }
  ];
</script>

<CommentInput
  on:created={({ detail }) => (comments = [...comments, detail.comment])} />
<div class="comment-list">
  {#each comments as comment (comment._id)}
    <Comment {comment} />
  {/each}
</div>
