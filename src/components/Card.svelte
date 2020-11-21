<script>
  export let draggable = false
  export let handleDragStart = () => {}
  export let handleDragOver = () => {}
  export let handleDrop = () => {}
  export let handleDragEnter = () => {}
  export let handleDragLeave = () => {}
  export let handleDragEnd = () => {}
  export let id
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';

  .card {
    border: 1px solid $border-color;
    border-radius: 5px;
    padding: 1rem;
  }
</style>

<div class="card" {id} {draggable} on:dragstart={handleDragStart} on:dragover={handleDragOver} on:drop={handleDrop} on:dragenter={handleDragEnter} on:dragleave={handleDragLeave} on:dragend={handleDragEnd}>
  <slot />
</div>
