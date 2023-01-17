<script lang='ts'>
  import { CursorSpecialEffects } from './lib/fireworks'
  import { onMount } from 'svelte'
  import HeadClock from './HeadClock.svelte'
  import HeadWeek from './HeadWeek.svelte'
  import JiaHeCard from './JiaHeCard.svelte'
  import CardFront from './CardFront.svelte'
  import CardBack from './CardBack.svelte'
  import Footer from './Footer.svelte'
  import { currentDarkMode } from './stores'

  $: currentDarkMode.subscribe((value) => {
    if (value == 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  onMount(() => {
    console.log(`\n%c ⚡JiaHe %c https://jiahe005.github.io %c BY%c ShellWen  \n\n`,
      'color: #ffffff; background: rgb(0, 145, 228); padding:5px 0;',
      'background:rgba(197, 197, 197, 0.89); padding:5px 0;',
      'color: #ffffff; background: rgba(49, 49, 49, 0.85); padding:5px 0;',
      'color: rgb(0, 145, 228); background: rgba(49, 49, 49, 0.85); padding:5px 0;')
  })

  let currentTime = new Date()

  onMount(() => {
    const cursorSpecialEffects = new CursorSpecialEffects()
    cursorSpecialEffects.init()
    return () => {
      cursorSpecialEffects.destroy()
    }
  })

  onMount(() => {
    const interval = setInterval(() => {
      currentTime = new Date()
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

  onMount(() => {

  })
</script>
<main
  class='bg-default text-default dark:bg-default-dark dark:text-default-dark min-w-[100vw] min-h-[100vh] flex flex-col items-center bgImg'>
  <div
    class='w-full max-w-sm flex-1 flex flex-col justify-between z-10'>
    <div class='flex-1 flex flex-col'>
      <header class='flex flex-col pl-4'>
        <HeadClock class='pt-8' date={currentTime} />
        <HeadWeek date={currentTime} />
        <span class='font-dot text-2xl'>
          嘉何的电子名片
        </span>
      </header>
      <section class='mt-4 bg-default dark:bg-default-dark'>
        <JiaHeCard backClass='h-[400px] bg-default dark:bg-default-dark'
                   frontClass='h-[200px] bg-default dark:bg-default-dark'>
          <CardFront slot='front' />
          <CardBack slot='back' />
        </JiaHeCard>
      </section>
    </div>
    <footer class='pl-4'>
      <Footer />
    </footer>
  </div>
</main>

<style>
  .bgImg {
    @apply overflow-auto relative;
  }

  .bgImg:after {
    content: '';
    z-index: 1;
    opacity: 0.1;
    background-image: url("/image/top.png");
    @apply absolute left-0 bottom-0 w-full h-full block bg-contain bg-center bg-no-repeat;
  }
</style>
