<script>
  export let iconName
  export let iconClass
  export let iconText
  export let small
  export let medium
  export let large
  export let border

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
    &.small {
      width: 16px;
      height: 16px;
      line-height: 16px;
      font-size: 8px;
    }
    &.medium {
      width: 24px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
    }
    &.large {
      width: 48px;
      height: 48px;
      line-height: 48px;
      font-size: 24px;
    }
    &.border {
      background-color: $border-color;
    }
  }
</style>

<span class={`icon ${iconName ? iconName: ''} ${iconClass ? iconClass : ''}`} class:small class:medium class:large class:border>{text}</span>
