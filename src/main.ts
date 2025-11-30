import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import store from './stores/index.ts'

// 创建vue实例
const app = createApp(App)

// 挂载pinia
app.use(store)
app.use(router).mount('#app')
