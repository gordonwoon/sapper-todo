<style lang="scss">
  @keyframes Surround {
    $spread: 5px;
    0% {
      transform: translateX(-50%) translateZ(-$spread);
      // transform: translate3d(0, 0, -$spread);
    }
    25% {
      transform: translateX(-150%);
      // transform: translate3d(-$spread, 0, 0);
    }
    50% {
      transform: translateX(-50%) translateY(-25%) translateZ($spread);
      // transform: translate3d(0, 0, $spread);
    }
    75% {
      transform: translateX(100%);
      // transform: translate3d($spread, 0, 0);
    }
    100% {
      transform: translateX(-50%) translateZ(-$spread);
      // transform: translate3d(0, 0, -$spread);
    }
  }
  .container {
    width: inherit;
    height: inherit;
    perspective: 20px;
    background-color: lightgreen;
  }
  .particle {
    position: absolute;
    $size: 5px;
    height: $size;
    width: $size;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: black;
    opacity: .7;
    border-radius: 50%;
    animation: Surround 3s ease-in-out infinite;
  }

  @for $i from 1 through 10 {
    .particle:nth-child(#{$i}){
      animation-delay: -$i * .3s;
      background: hsl( random(360) , 70%, 50%);
    }
  }

</style>

<div class="container">
  <div class="particle" />
  <div class="particle" />
  <div class="particle" />
  <div class="particle" />
</div>
