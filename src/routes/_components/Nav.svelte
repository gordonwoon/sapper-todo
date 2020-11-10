<script>
  export let segment;
  const handleClick = () => {
    console.log(segment);
  }
</script>

<nav class="navbar" on:click={handleClick}>
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
