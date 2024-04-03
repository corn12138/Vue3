import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/saga-blue/theme.css';       // 主题
import 'primevue/resources/primevue.min.css';                 // 核心样式
import 'primeicons/primeicons.css';                           // 图标

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
