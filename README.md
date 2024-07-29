# vue_qiongyou
## 初始化项目 vite
1. npm create vue@latest
2. 具体配置 yes or no
3. npm install
4. npm run dev
5. npm install --save normalize.css

## 安装 element-plus --按需导入
1.  npm install element-plus --save
2.  npm install -D unplugin-vue-components unplugin-auto-import 按需导入所需配置
3.  vite.config中引入   
    import AutoImport from 'unplugin-auto-import/vite'  
    import Components from 'unplugin-vue-components/vite'  
    import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'  
4.  将下面代码 导入vite.config plugins中  
    AutoImport({  
      &emsp; resolvers: [ElementPlusResolver()],  
    }),  
    Components({  
      &emsp; resolvers: [ElementPlusResolver()],  
    }),
   
## 配置路由





