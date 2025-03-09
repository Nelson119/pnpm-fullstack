// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(), // Ensure you have the basic preset
    presetAttributify(), // 可使用 attribute 模式
  ],
  // 如需進一步自訂規則，可在此擴充
  shortcuts: [
    {
      'btn-primary': 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600',
    },
  ],
})
