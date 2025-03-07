import UnoCSS from '@unocss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
  ],
  server: {
    open: true, // 啟動時自動開啟瀏覽器
    port: 5573,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        secure: false,
        // 將 /api 前綴移除，若後端不需要 /api 前綴時使用
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
