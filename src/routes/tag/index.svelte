<script context="module">

  export async function preload({ params }) {
    const res = await this.fetch(`/tag.json`);
    const tags = await res.json();

    return { tags };
  }
</script>

<script>
  import Icon from 'components/Icon.svelte'
  export let tags
</script>


<div>
  {#each tags as tag}
    <Icon iconText={tag.name} />
  {/each}
</div>
