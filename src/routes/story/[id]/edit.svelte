<script>
  import StoryForm from '../_StoryForm.svelte'

  let story = { _id: 1, title: 'Story Title', type: 'link', content: 'https://svelte.dev/' }
</script>

<svelte:head>
  <title>Edit your story</title>
</svelte:head>

<StoryForm {story}/>
