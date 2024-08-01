import { createRouter, createWebHistory } from 'vue-router'
import Layout from "../views/layout/Layout.vue";
import Login from "../views/login/Login.vue";
import Home from "../views/home/Home.vue";

const About = () => import("../views/about/About.vue")
const Destination = () => import("../views/destination/index.vue")
const Community = () => import("../views/community/Community.vue")
const Travel = () => import("../views/travel/Travel.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/dest',
          name: 'Destination',
          component: Destination
        },
        {
          path: '/community',
          name: 'Community',
          component: Community,
          meta:{
            isLogin:true
          }
        },
        {
          path: '/travel',
          name: 'Travel',
          component: Travel,
          meta:{
            isLogin:true
          }
        }
      ],
    },
    {
      path: '/login',
      name: Login,
      component: Login
    }

  ]
})

//配置路由前置守卫
router.beforeEach((to,from,next)=>{
  //判断进入这个路由界面的时候是否需要登录
  if(to.meta.isLogin){//需要登录
    //判断是否登录过
      next('/login')
    //判断是否登录  vuex数据
    // if(store.state.user.userinfo.isLogin){
    //     next()
    // }else{
    //   console.log('to---login----to',to);
    //   //即将进入登录界面了，存储上一刻即将进入的路径 目的：登录后跳转到对应的想进入的界面
    //   store.commit('changePath',to.path)
    //   next('/login')
    // }
  }else{
    //不需要登录
    next()
  }
})
// // 配置路由全局前置守卫
// router.beforeEach((to,from,next) =>{
//   // 判断进入页面的路由是否需要登录
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     // 需要验证登录
//     if(token){
//       next()
//     }
//     else{
//       next('/login')
//     }

//   }
//   else {
//     // 不需要
//     next()
//   }
// })


export default router
