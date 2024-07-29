import { createRouter, createWebHistory } from 'vue-router'
import Layout from "../views/layout/Layout.vue";
import Login from "../views/login/Login.vue";
import Home from "../views/home/Home.vue";

const About = () => import("../views/about/About.vue")

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

export default router
