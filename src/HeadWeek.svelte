<script lang='ts'>
  export let date: Date
  let clazz: string = ''
  // noinspection ReservedWordAsName
  export { clazz as class }
  $: month = (date.getMonth() + 1).toString().padStart(2, '0')
  $: day = date.getDate().toString().padStart(2, '0')
  $: week = date.toLocaleDateString('en-US', { weekday: 'short' })
  let month
  let day
  let week
</script>

<div class={`font-dot text-4xl ${clazz}`}>
  { `${month}/${day} ${week}` }
</div>
