import { writable as localWritable } from 'svelte-local-storage-store'
import { createMediaStore } from 'svelte-media-queries'
import type { Readable } from 'svelte/store'
import { derived } from 'svelte/store'

type LocalDarkModeState = 'light' | 'dark' | 'system'
type SystemDarkModeState = 'light' | 'dark' | 'unknown'
type CurrentDarkModeState = 'light' | 'dark'

export const localDarkMode = localWritable<LocalDarkModeState>('darkMode', 'system')
const darkMedia = createMediaStore('(prefers-color-scheme: dark)')
const lightMedia = createMediaStore('(prefers-color-scheme: light)')
export const systemDarkMode: Readable<SystemDarkModeState> = derived([darkMedia, lightMedia], ([dark, light]) => {
  if (dark) return 'dark'
  if (light) return 'light'
  return 'unknown'
})

export const currentDarkMode: Readable<CurrentDarkModeState> = derived([localDarkMode, systemDarkMode], ([localDarkMode, systemDarkMode]) => {
  if (localDarkMode === 'system') {
    console.info("使用浏览器深色模式偏好")
    if (systemDarkMode != 'unknown') {
      console.info(`浏览器深色偏好为：${systemDarkMode}`)
      return systemDarkMode
    } else {
      console.info("浏览器深色偏好未知，使用默认浅色")
      return 'light'
    }
  } else {
    console.info(`使用本地深色模式偏好：${localDarkMode}`)
    return localDarkMode
  }
})
