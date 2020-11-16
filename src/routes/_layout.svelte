<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`/tag.json`);
    const tags = await res.json();

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
</style>

<div class="height-100 flex-column">
  <Nav {handleExpand} />
  <div class="flex-row flex-grow">
    <SideNav {expand} {tags}/>
    <main>
      <slot />
    </main>
  </div>
</div>
