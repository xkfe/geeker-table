import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import './element.scss'
import './common.scss'
import ElementPlus from 'element-plus'

import GeekerTable from '../packages'

const app = createApp(App)

app.use(ElementPlus, { locale: zhCn }).use(GeekerTable).mount('#app')
