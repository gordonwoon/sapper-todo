<script>
  export let expand;
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';

  .side-nav {
    height: 100%;
    width: 50px;
    z-index: 1;
    overflow-x: hidden;
    transition: 0.25s;
    padding-top: 60px;
    &.expand {
      width: 200px;
    }
  }

  @media only screen and (max-width: 600px) {
    .side-nav {
      width: 0px;
    }
  }
</style>

<nav class="side-nav" class:expand >
  <div class="navbar-left">
    <a
      class="logo"
      href="/"
    >
      News App
    </a>
  </div>
  <div class="navbar-right">
    <a
      class="navbar-link"
      href="/login"
    >
      Log in
    </a>
    <a
      class="navbar-link"
      href="/signup"
    >
      Sign up
    </a>
  </div>
</nav>
