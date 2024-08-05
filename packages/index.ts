import type { App } from 'vue'
import Table from './components/ProTable/index.vue'

export const GeekerTable = {
  install: (app: App) => {
    app.component('GeekerTable', Table)
  },
}

export default GeekerTable
