<script>
  import MenuIcon from 'components/MenuIcon.svelte'
  let search
  export let handleExpand
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';

  .nav {
    height: 60px;
    color: white;
    border-bottom: 1px solid $border-color;
    padding: 0 10px;
    > div {
      margin: auto 10px;
      height: 48px;
      line-height: 48px;
      text-align: center;
    }
  }
  input {
    height: 70%;
    width: 70%;
  }
</style>

<div>
  <div class="nav flex-row" >
    <MenuIcon {handleExpand} />
    <div href="/">Do Only</div>
    <div class="flex-grow"><input bind:value={search} /></div>
    <div class="xs-hide" href="/login">
      <span class="text-center">Log in</span>
    </div>
    <div class="xs-hide" href="/signup">Sign up</div>
  </div>
</div>
