<style lang="scss">
  @import 'src/styles/theme.scss';

  .card {
    border: 1px solid $border-color;
    border-radius: 2px;
    padding: 1rem;
  }
</style>

<div class="card">
  <slot />
</div>
