import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      '667c-240c-c983-1-4403-580b-2899-201e-bc2d.ngrok-free.app', // 显式添加当前域名
      '.ngrok-free.app' // 允许所有 ngrok 域名（仅 Vite 5+ 支持通配符）
    ]
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
