import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nib from 'nib'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    "@vue/language-plugin-pug"
  ],
  css: {
    preprocessorOptions: {
      stylus: {
        use: [nib()],
        import: ['~nib/lib/nib/index.styl'],
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
