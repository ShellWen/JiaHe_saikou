<script lang="ts">
  import Icon from 'svelte-awesome'
  import { weibo, qq, twitter, telegram, steam, github } from 'svelte-awesome/icons'
  import { faTiktok as tiktok, faBilibili as bilibili } from '@fortawesome/free-brands-svg-icons';
</script>

<div class='flex-1 flex flex-col justify-between p-4'>
  <div class='flex flex-col'>
    <a href='https://v.douyin.com/Lox8duD/' target='_blank' rel='noopener noreferrer' class='link'>
      <Icon data={tiktok} class='inline-block' />
      JiaHe005
    </a>
    <a href='https://qm.qq.com/cgi-bin/qm/qr?k=E359EoW9MSoSOuFMmSteLUjlqFQZFxgs' target='_blank' rel='noopener noreferrer' class='link'>
      <Icon data={qq} class='inline-block' />
      2093702861
    </a>
    <a href='https://weibo.com/u/6482679368' target='_blank' rel='noopener noreferrer' class='link'>
      <Icon data={weibo} class='inline-block' />
      嘉何今天没睡醒
    </a>
    <a href='https://space.bilibili.com/321199489' target='_blank' rel='noopener noreferrer' class='link'>
      <Icon data={bilibili} class='inline-block' />
      嘉何今天没睡醒
    </a>
    <a href='https://twitter.com/JiaHe888' target='_blank' rel='noopener noreferrer' class='link'>
      <Icon data={twitter} class='inline-block' />
      @JiaHe888
    </a>
    <a href='https://t.me/ABC86174356' target='_blank' rel='noopener noreferrer' class='link'>
      <Icon data={telegram} class='inline-block' />
      @ABC86174356
    </a>
    <a href='https://steamcommunity.com/id/jiahe005/' target='_blank' rel='noopener noreferrer' class='link'>
      <Icon data={steam} class='inline-block' />
      jiahe005
    </a>
    <a href='https://github.com/jiahe005' target='_blank' rel='noopener noreferrer' class='link'>
      <Icon data={github} class='inline-block' />
      @jiahe005
    </a>
  </div>
  <div class='relative'>
    <img alt='' class='absolute bottom-0 right-0 translate-y-[45px] translate-x-[15px] w-32'
         src='/image/tx2.png' />
  </div>
</div>

<style>
  .link {
    @apply w-fit;
  }
</style>
