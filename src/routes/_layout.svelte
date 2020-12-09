<script context="module">
  export async function preload({ params }) {
    const tags = await this.fetch(`/tag.json`).then(res => res.json());

    return { tags };
  }
</script>

<script>
  import Nav from 'routes/_components/navigation/Nav.svelte'
  import SideNav from 'routes/_components/navigation/SideNav.svelte'

  export let tags
  let expand = false
  const handleExpand = value => {
    expand = value;
  }
</script>

<style lang="scss" global>
  @import 'src/styles/global.scss';

  main {
    padding: 1.5rem;
  }
</style>

<div class="height-100 flex-column">
  <Nav {handleExpand} />
  <div class="flex-row flex-grow">
    <SideNav {expand} {tags}/>
    <main class="flex-grow">
      <slot />
    </main>
  </div>
</div>
