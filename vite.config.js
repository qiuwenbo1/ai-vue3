import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    open: false,
    port:3000,
    proxy:{
      '/api':{
        target:"http://192.168.1.4:8888",
        changeOrigin: true,
        rewrite:(path)=> path.replace(/^\/api/,'')
      }
    }
  }
})
