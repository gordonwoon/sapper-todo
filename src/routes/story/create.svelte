<svelte:head>
  <title>Create a new story</title>
</svelte:head>

<script>
  import StoryForm from './_StoryForm.svelte'

  let story = { title: '', type: 'link', content: '' }
</script>

<StoryForm {story}/>
