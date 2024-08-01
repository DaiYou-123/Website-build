# vue_qiongyou
### 初始化项目 vite
1. npm create vue@latest
2. 具体配置 yes or no
3. npm install
4. npm run dev
5. npm install --save normalize.css

### 安装 element-plus --按需导入
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
   
### 路由目录路径
├─about   
├─community   
├─destination   
├─home   
│  ├─banner   
│  ├─shop  
│  └─travel   
├─layout   
├─login   
└─travel   

## 首页布局  
### 轮播图布局
1. 引入SCSS  
   1.  npm install sass
   2.  npm install @vitejs/plugin-sass --save-dev
2. header 导航--element-plus 导航组件  
   1.  配置路由跳转页面信息(home dest community travel)  
   2.  添加路径到element中的default-active中保持一致的跳转  
3. 轮播图  
    1. element 走马灯库 / Swiper 滑动插件
    2. 添加图片
    2. 搜索框 v-mode / 三方库 input 
    3. 搜索框光标提示 -- 热门城市
4. 请求热门城市接口  
      1. 需要网络请求 安装 
      2. axios  npm install axios
      3. querystring npm install querystring  
5. 解决跨域请求问题  
      1. 配置request处理 封装axios请求
      2. vite.config 配置跨域
      3. 引入api请求，测试是否接收到数据   

### 今日推荐布局
1. 居中视口wrapper
2. 静态布局 图片 文字 作者 点赞数
3. 调用第三方接口 解决图片防盗问题  
4. 深层穿透修改样式
5. 切换推荐 改变接口页数

### 今日热门游记与话题布局
1. 布局  
2. 拿接口 二维数组的渲染 一屏中显示八条数据   
3. 分屏显示 icon图标

### 目的地跳转  
1. 布局  
2. 调用搜索接口 渲染数据到页面
3. 加入节流 解决连续判断问题

### 登录页面   
##### 社区、行程助手需要登录后才能查看
1. 页面布局
1. 配置路由元信息
2. 配置路由前置守卫  
3. 使用vuex存储登录信息 （登录账号或者token字段可以存储本地存储 不一定是vuex/pinia  只是vuex也可以用存储登录信息 ）     
      1. 安装 npm install vuex@next --save
      1. 练习vuex 把登录状态存储到vuex 
      2. 做用户信息的检验 成功->登录成功并跳转
      3. 渲染用户名 
      4. 持久化存储 

#### 页脚相关信息布局

## 项目接口（来自穷游网站）
##### ------ 声明：资源仅用于本人自学使用，并不作为商业用途，没有任何利益的目的，若发现有任何侵权行为，恳请您的原谅并告知！
##### ------ 本人尊重所有创作者的知识产权，并致以最崇高的敬意 🌟🌟🌟
1. 今日推荐：
   https://www.qyer.com/qcross/home/index.php?action=recommend&timer=1638347951752&ajaxID=59b0b70acebeb65c1882399e

2. 穷游商城
   https://www.qyer.com/qcross/home/index/recommendbiz?page=1

3. 热门游记
   https://www.qyer.com/qcross/home/ajax?action=thread
4. 搜索
   https://www.qyer.com/qcross/home/ajax?action=hotelsearch&keyword=%E4%BA%91&type=1

5. biu biu 接口
   https://www.qyer.com/qcross/biu/index/web?page=0&limit=20&sort=hot&is_empty=0

6. 图片防盗链 ---- 解决403问题

7. 热门城市
   https://bang.360.cn/aj/getcitycode


8. 搜索接口
   https://www.qyer.com/qcross/place/public.php?action=placesearch&keyword=q&client=web
   

9. 目的地接口搜索
   https://place.qyer.com/qcross/place/public.php?action=placesearch&keyword=55&client=web

10. 目的地 数据
   https://place.qyer.com/qcross/place/public.php?action=placetop10


11. 社区接口  
     1. 游记攻略
      https://bbs.qyer.com/index.php?action=getTravels&page=1

     2. 结伴旅行
      https://bbs.qyer.com/index.php?action=getTogether&page=1