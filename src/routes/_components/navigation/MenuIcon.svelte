<script>
  export let handleExpand;
  let checked = false;
  const handleClick = () => {
    checked = !checked;
    handleExpand(checked);
  }
</script>

<style lang="scss">
  .container {
    cursor: pointer;
    margin: auto 5px;
  }
  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.15s;
  }
  .checked {
    > .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }
    > .bar2 {
      opacity: 0;
    }
    > .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }
</style>

<div class="container" class:checked on:click={handleClick}>
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
