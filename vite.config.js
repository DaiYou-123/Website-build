import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
     // element 按需导入所需配置
     AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    proxy: {
      '/api': {
        target: 'https://bang.360.cn',//
        ws: true,
        changeOrigin: true,
        // pathRewrite:{//重写路径
        //     '^/api':''
        // }
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      '/foo': { //穷游首页接口
        target: 'https://www.qyer.com',//
        ws: true,
        changeOrigin: true,
        // pathRewrite:{//重写路径
        //     '^/api':''
        // }
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      '/boo': { //穷游目的接口
        target: 'https://place.qyer.com',//
        ws: true,
        changeOrigin: true,
        // pathRewrite:{//重写路径
        //     '^/api':''
        // }
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      
    },
  }

})
