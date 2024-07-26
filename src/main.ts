import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import 'dayjs/locale/zh-cn'
import './element.scss'
import './common.scss'
import ElementPlus from 'element-plus'

import GeekerTable from '../packages'

const app = createApp(App)

app.use(ElementPlus).use(GeekerTable).mount('#app')
