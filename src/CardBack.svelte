<script lang="ts">
  import Icon from 'svelte-awesome'
  import { envelope, github, qq, share, steam, telegram, twitter, weibo } from 'svelte-awesome/icons'
  import { faBilibili as bilibili, faTiktok as tiktok } from '@fortawesome/free-brands-svg-icons'

  interface Social {
    text: string
    icon: any
    link: string
  }

  const socials: Social[] = [
    { text: 'QQ：2093702861', icon: qq, link: 'https://qm.qq.com/cgi-bin/qm/qr?k=E359EoW9MSoSOuFMmSteLUjlqFQZFxgs' },
    { text: 'JiaHe005', icon: tiktok, link: 'https://v.douyin.com/Lox8duD/' },
    { text: '嘉禾望岗232633099', icon: qq, link: 'https://jq.qq.com/?_wv=1027&k=CIMP9kPN' },
    { text: '嘉何的微博', icon: weibo, link: 'https://weibo.com/u/6482679368' },
    { text: '嘉何的B站', icon: bilibili, link: 'https://space.bilibili.com/321199489' },
    { text: '推特@JiaHe888', icon: twitter, link: 'https://twitter.com/JiaHe888' },
    { text: '@jiahe_furry', icon: telegram, link: 'https://t.me/jiahe_furry' },
    { text: 'jiahe005', icon: steam, link: 'https://steamcommunity.com/id/jiahe005/' },
    { text: '@jiahe005', icon: github, link: 'https://github.com/jiahe005' },
    { text: 'jiahe.gx@outlook.com', icon: envelope, link: 'mailto:jiahe.gx@outlook.com' },
    { text: '感谢 ShellWen 对本页面的贡献', icon: share, link: 'https://blog.gfmc.top/' },
  ]
</script>

<div class="w-full h-[400px] flex-1 flex flex-col justify-between p-4">
  <div class="flex flex-col">
    {#each socials as social}
      <a class="link" href={social.link} rel="noopener noreferrer" target="_blank">
        <Icon class="inline-block" data={social.icon} />
        {social.text}
      </a>
    {/each}
  </div>
  <div class="relative">
    <img alt="" class="absolute bottom-0 right-0 translate-y-[45px] translate-x-[15px] w-32" src="/image/tx2.png" />
  </div>
</div>

<style>
  .link {
    @apply w-fit;
  }
</style>
