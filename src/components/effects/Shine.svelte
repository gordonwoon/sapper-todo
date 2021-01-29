<script>
  export let rank
</script>

<style lang="scss">
  @keyframes TransitioningBackground {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 75% 75%;
    }
  }

  @mixin transition-background($color) {
    background: linear-gradient(140deg, $color 45%, white 50%, $color 55%);
    background-size: 400% 400%;
    animation: TransitioningBackground 3s linear infinite;
    filter: drop-shadow(1px 1px 2px grey);
  }

  .container {
    width: inherit;
    height: inherit;
    border-radius: 50%;
    // for shine & gradient effects to work
    position: relative;
    overflow: hidden;
    // for background color shift

    &.A { @include transition-background(gold); }
    &.B { @include transition-background(silver); }
    &.C { @include transition-background(#cd7f32); }
    &.D { @include transition-background(lightgreen); }
    &.E { @include transition-background(lightseagreen); }
    // &::before {
    //   content: '';
    //   display: block;
    //   position: absolute;
    //   background: rgba(255, 255, 255, 0.5);
    //   width: 60px;
    //   height: 100%;
    //   top: 0;
    //   filter: blur(30px);
    //   transform: translateX(-100px) skewX(-15deg);
    // }

    // // grow button and change background gradient on hover
    // &:hover {
    //   background-image: (linear-gradient(to left, #2d8fe5, #d155b8));
    //   background-image: (linear-gradient(270deg, #8e9ac2, #42579a));
    //   transform: scale(1.2);
    //   cursor: pointer;

    //   // psuedo-elements for right- and left-side shine animations
    //   &::after {
    //     transform: translateX(300px) skewX(-15deg);
    //     transition: 0.7s;
    //   }
    // }
  }

</style>

<div class={`container ${rank}`}>
</div>
