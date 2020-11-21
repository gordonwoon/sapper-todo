<script>
  export let value
  export let ref
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';

  input {
    border: 0;
    border-radius: 5px;
    color: white;
    background-color: $border-color;
  }
</style>

<input bind:this={ref} bind:value />
