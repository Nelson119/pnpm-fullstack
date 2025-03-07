// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(), // 可使用 attribute 模式
  ],
  // 如需進一步自訂規則，可在此擴充
})
