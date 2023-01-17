<script lang='ts'>
  import { onDestroy } from 'svelte'
  import { createMediaStore } from 'svelte-media-queries'

  enum DeviceType {
    Touch,
    Pointer,
  }

  const match = createMediaStore('(hover: hover)')
  $: deviceType = $match ? DeviceType.Pointer : DeviceType.Touch
  onDestroy(() => match.destroy())

  let isFront = true

  function handleJiaHeCardEnter() {
    isFront = false
  }

  function handleJiaHeCardLeave() {
    isFront = true
  }

  function handleJiaHeCardClick() {
    isFront = !isFront
  }

  export let frontClass: string = ''
  export let backClass: string = ''
</script>

<div
  class={`rounded-lg border border-gray-200 dark:border-gray-800 shadow-md transition-all duration-500 ${isFront ? frontClass : backClass}`}
  on:click={deviceType === DeviceType.Touch ? handleJiaHeCardClick : undefined}
  on:mouseenter={deviceType === DeviceType.Pointer ? handleJiaHeCardEnter : undefined}
  on:mouseleave={deviceType === DeviceType.Pointer ? handleJiaHeCardLeave : undefined}>
  <div class={`rounded-lg relative transition-all duration-500 card h-full w-full ${isFront ? '' : 'card-back'}`}>
    <div class='rounded-lg absolute h-full w-full front'>
      <slot name='front'>
        Card front not provided
      </slot>
    </div>
    <div class='rounded-lg absolute h-full w-full back'>
      <slot name='back'>
        Card back not provided
      </slot>
    </div>
  </div>
</div>

<style>
  .card {
    transform-style: preserve-3d;
  }

  .card-back {
    transform: rotateX(180deg);
  }

  .front,
  .back {
    backface-visibility: hidden;
  }

  .front {
    transform: rotateX(0deg);
  }

  .back {
    transform: rotateX(180deg);
  }
</style>
