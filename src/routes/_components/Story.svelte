<script>
  let story = {
    score: 0,
    title: 'First Story',
    user: {
      username: 'user'
    },
    link: '/story/123',
    commentsCount: '2 comments',
    createdAt: '2 days ago'
  }
</script>

<div class="homepage page">
  <div class="story-item">

    <div class="voter">
      <span class="upvoter">
        <span class="arrow"></span>
      </span>
      <span class="score">{story.score}</span>
    </div>

    <div class="main">
      <div class="details">
        <a
          class="title"
          href="{story.link}"
        >
          {story.title}
        </a>
        <span class="domain">
          self
        </span>
      </div>
      <div class="byline">
        by {story.user.username} {story.createdAt} |
        <a
          class="comments-link"
          href="{story.link}"
        >
          {story.commentsCount}
        </a>
      </div>
    </div>

  </div>
</div>
