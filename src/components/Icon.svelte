<script>
  export let iconName = ''
  export let iconClass = ''
  export let iconText = ''
  export let tiny = false
  export let small = false
  export let medium = false
  export let large = false
  export let border = false
  export let fill = false

  let text = iconText ? iconText.substr(0, 1).toUpperCase() : '';
</script>

<style lang="scss">
  @import 'src/styles/theme.scss';

  .icon {
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    &.tiny {
      width: 16px;
      height: 16px;
      line-height: 16px;
      font-size: 8px;
    }
    &.small {
      width: 24px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
    }
    &.medium {
      width: 36px;
      height: 36px;
      line-height: 36px;
      font-size: 18px;
    }
    &.large {
      width: 48px;
      height: 48px;
      line-height: 48px;
      font-size: 24px;
    }
    &.border {
      border: 1px solid $border-color;
    }
    &.fill {
      background-color: $border-color;
    }
  }
</style>

<div class={`icon ${iconName ? iconName: ''} ${iconClass ? iconClass : ''}`} class:tiny class:small class:medium class:large class:border class:fill>{text}</div>
