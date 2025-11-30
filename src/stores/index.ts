import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 导入插件

const store = createPinia()

// 持久化插件
store.use(piniaPluginPersistedstate)

export default store