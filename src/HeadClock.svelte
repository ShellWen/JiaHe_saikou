<script lang='ts'>
  export let date: Date
  let clazz: string = ''
  // noinspection ReservedWordAsName
  export { clazz as class }
  $: hours = date.getHours().toString().padStart(2, '0')
  $: minutes = date.getMinutes().toString().padStart(2, '0')
  let hours
  let minutes
</script>

<div class={`font-dot text-7xl ${clazz}`}>
  { `${hours}:${minutes}` }
</div>
