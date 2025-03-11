import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),        // ✅ 加載 Tailwind CSS 樣式
    presetIcons({ extraProperties: { display: 'inline-block', 'vertical-align': 'middle' } }), // ✅ 圖示支援
    presetAttributify(),  // ✅ 屬性模式，如 <div text-center />
    presetTypography(),   // ✅ 內建排版
  ],
  theme: {
    colors: {
      primary: '#1e3a8a',       // ✅ 確保 primary 存在
      'primary-dark': '#172554' // ✅ 確保 primary-dark 存在
    }
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark',
  },
  rules: [
    ['m-1', { margin: '0.25rem' }], // 自訂規則示例
  ],
})
