import './assets/base.css'
// import 'normalize.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import  "@/api/index";
const app = createApp(App)

app.use(router)

app.mount('#app')
