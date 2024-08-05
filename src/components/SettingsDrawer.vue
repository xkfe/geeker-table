<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { isDark, toggleDark } from '~/composables'
import { getDarkColor, getLightColor } from '~/utils/color'

const drawerVisible = defineModel()

// 预定义主题颜色
const colorList = [
  '#daa96e',
  '#0c819f',
  '#409eff',
  '#27ae60',
  '#ff5c93',
  '#e74c3c',
  '#fd726d',
  '#f39c12',
  '#9b59b6',
]
const DEFAULT_PRIMARY = '#409eff'
const primary = ref(localStorage.getItem('primary') || DEFAULT_PRIMARY)
const isGrey = ref(false)

// 修改主题颜色
function changePrimary(val: string | null) {
  if (!val) {
    val = DEFAULT_PRIMARY
    ElMessage({ type: 'success', message: `主题颜色已重置为 ${DEFAULT_PRIMARY}` })
  }
  // 计算主题颜色变化
  document.documentElement.style.setProperty('--el-color-primary', val)
  document.documentElement.style.setProperty(
    '--el-color-primary-dark-2',
    isDark.value ? `${getLightColor(val, 0.2)}` : `${getDarkColor(val, 0.3)}`,
  )
  for (let i = 1; i <= 9; i++) {
    const primaryColor = isDark.value ? `${getDarkColor(val, i / 10)}` : `${getLightColor(val, i / 10)}`
    document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor)
  }
  localStorage.setItem('primary', val)
};

changePrimary(localStorage.getItem('primary'))
</script>

<template>
  <el-drawer v-model="drawerVisible" title="界面设置" size="320px">
    <div class="theme-item">
      <span>主题颜色</span>
      <el-color-picker v-model="primary" :predefine="colorList" @change="changePrimary" />
    </div>
    <div class="theme-item">
      <span>暗黑模式</span>
      <el-switch :model-value="isDark" :active-icon="Sunny" :inactive-icon="Moon" inline-prompt @change="toggleDark" />
    </div>
    <div class="theme-item">
      <span>灰色模式</span>
      <el-switch v-model="isGrey" disabled />
    </div>
  </el-drawer>
</template>

<style lang="scss" scoped>
.theme-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 14px;
  font-size: 14px;
}
</style>
