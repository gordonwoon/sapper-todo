<script>
  import Nav from 'routes/_components/navigation/Nav.svelte'
  import SideNav from 'routes/_components/navigation/SideNav.svelte'

  export let segment
  let expand = false

  const handleExpand = value => {
    expand = value;
  }
</script>

<style lang="scss" global>
  @import 'src/styles/global.scss';
</style>

<Nav {segment} {handleExpand} />
<div class="flex-row">
  <SideNav {expand} />
  <main>
    <slot />
  </main>
</div>
