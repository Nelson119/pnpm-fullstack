import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import unocssConfig from './unocss.config' // ✅ 載入外部設定

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [vue(), UnoCSS(unocssConfig)],
  server: {
    open: true, // 啟動時自動開啟瀏覽器
    port: 5573,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        secure: false,
        // 將 /api 前綴移除，若後端不需要 /api 前綴時使用
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // 讓 import 時可以省略副檔名
    extensions: ['.ts', '.js', '.vue', '.json']
  }
})
