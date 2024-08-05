<script setup lang="tsx">
import { ref } from 'vue'
import { Setting } from '@element-plus/icons-vue'
import SettingsDrawer from '~/components/SettingsDrawer.vue'
import TableBase from '~/components/TableBase.vue'
import TableAutoRequest from '~/components/TableAutoRequest.vue'
import TableAutoSearch from '~/components/TableAutoSearch.vue'

const list = [
  { key: 'base', title: '基础表格', component: TableBase },
  { key: 'auto-request', title: '自动请求', component: TableAutoRequest },
  { key: 'auto-search', title: '配置搜索', component: TableAutoSearch },
  { key: 'tree-table', title: '树形表格', component: TableBase },
  { key: 'sort-table', title: '拖拽排序', component: TableBase },
  { key: 'complex-table', title: '复杂表格', component: TableBase },
  { key: 'custom-column', title: '自定义列与枚举', component: TableBase },
  { key: 'custom-header', title: '自定义表头', component: TableBase },
]

const selected = ref(0)
const showSettingsDrawer = ref(false)
function tabClick({ index }) {
  selected.value = Number(index)
}
</script>

<template>
  <div class="app-container">
    <el-config-provider size="default">
      <div class="card flex-1 flex" style="position: relative;">
        <el-tabs style="flex:1" @tab-click="tabClick">
          <template v-for="(item, index) of list" :key="item.key">
            <el-tab-pane :lazy="true">
              <template #label>
                <span>
                  {{ item.title }}
                </span>
              </template>
              <component :is="item.component" v-if="selected === index" />
            </el-tab-pane>
          </template>
        </el-tabs>
        <button class="setting-btn" @click="showSettingsDrawer = true">
          <el-icon class="animate-rotate" size="21">
            <Setting />
          </el-icon>
        </button>
      </div>
    </el-config-provider>
    <div class="card footer">
      <el-link href="https://github.com/xkfe/geeker-table" target="_blank">
        MIT License | 2024-present © geeker-table By xkfe Technology.
      </el-link>
    </div>

    <SettingsDrawer v-model="showSettingsDrawer" />
  </div>
</template>

<style scoped lang="scss">
#app {
  height: 100vh;
}

.dark .app-container {
  background: var(--el-bg-color);
}
.app-container {
  padding: 12px;
  background: #f2f3f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.footer {
  margin-top: 10px;
  text-align: center;
  padding: 12px;
}
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
  overflow: hidden;
}
.el-tabs {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
// 360 度旋转的话
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.setting-btn {
  width: 32px;
  height: 32px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
  &:hover,
  &:active {
    background: rgba(0, 0, 0, 0.08);
  }
  .animate-rotate {
    animation: rotate 2.4s linear infinite;
  }
}
:deep(.el-tabs__content),
:deep(.el-tab-pane) {
  height: 100%;
}
</style>
