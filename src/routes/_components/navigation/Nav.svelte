<script>
  import MenuIcon from 'routes/_components/navigation/MenuIcon.svelte'
  import Icon from 'components/Icon.svelte'
  import Input from 'components/Input.svelte'

  export let handleExpand
  export let segment

  console.log('segment', segment);

  let search
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';

  .nav {
    height: 6rem;
    border-bottom: 1px solid $border-color;
    padding: 0 10px;
    > div {
      margin: 0 10px;
      height: 4.8rem;
      line-height: 4.8rem;
      text-align: center;
    }
  }
  .logo {
    font-size: 1.8rem;
  }
  .input-container > :global(input) {
    height: 3.5rem;
    width: 70%;
  }
  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
  @media only screen and (max-width: 600px) {
    .input-container > :global(input) {
      width: 90%;
    }
  }
</style>

<div class="nav flex-row flex-align-items-center">
  <MenuIcon {handleExpand} />
  <div class="logo">
    <a href="/" class="flex-row"><Icon
        iconName="fas fa-check-double"
        iconClass="margin-right-medium"
        fill />
      <div>Do.Only</div></a>
  </div>
  <div class="flex-grow input-container"><Input bind:value={search} /></div>
  <div class="xs-hide" href="/login">
    <a href="/login"> <span class="text-center">Log in</span> </a>
  </div>
  <div class="xs-hide" href="/signup"><a href="/signup"> Sign up </a></div>
</div>
