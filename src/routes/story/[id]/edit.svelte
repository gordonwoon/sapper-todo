<script context="module">
  import StoryForm from '../_StoryForm.svelte'

  export async function preload({ params }) {
    const res = await this.fetch(`/story/${params.id}.json`);
    const story = await res.json();

    return { story };
  }
</script>

<script>
  export let story;
</script>

<svelte:head>
  <title>Edit your story</title>
</svelte:head>

<StoryForm {story}/>
