<script setup lang="ts">
import { ref } from 'vue'
import { CirclePlus, Delete, EditPen, View } from '@element-plus/icons-vue'
import axios from 'axios'

const columns = [
  { prop: 'username', label: '用户姓名', search: { el: 'input', tooltip: '我是搜索提示' } },
  {
    prop: 'gender',
    label: '性别',
    // 字典数据（本地数据）
    // enum: genderType,
    // 字典请求不带参数
    enum: getUserGender,
    fieldNames: { label: 'genderLabel', value: 'genderValue' },
    // 字典请求携带参数
    // enum: () => getUserGender({ id: 1 }),
    search: { el: 'select', props: { filterable: true } },
  },
  { prop: 'user.detail.age', label: '年龄' },
  { prop: 'idCard', label: '身份证号', search: { el: 'input' } },
  { prop: 'email', label: '邮箱' },
  { prop: 'address', label: '居住地址' },
  { prop: 'status', label: '用户状态', search: { el: 'tree-select', props: { filterable: true } } },
  { prop: 'createTime', label: '创建时间', sortable: true, search: {
    el: 'date-picker',
    span: 2,
    props: { type: 'datetimerange', valueFormat: 'YYYY-MM-DD HH:mm:ss' },
    defaultValue: ['2022-11-12 11:35:00', '2022-12-12 11:35:00'],
  } },
  { prop: 'operation', label: '操作', width: 300 },
]
const loading = ref(false)

async function getUserGender() {
  const res = await axios.get('https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e/geeker/user/gender')
  return res.data
}
async function getTableList(params) {
  loading.value = true
  try {
    return await axios.post('https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e/geeker/user/list', params)
  }
  finally {
    loading.value = false
    console.log('finally')
  }
}

// dataCallback 是对于返回的表格数据做处理，如果你后台返回的数据不是 list && total 这些字段，可以在这里进行处理成这些字段
function dataCallback(res) {
  return {
    list: res.data.list,
    total: res.data.total,
  }
}
</script>

<template>
  <div class="table-content table-box">
    <GeekerTable :columns="columns" :request-api="getTableList" :data-callback="dataCallback">
      <!-- 表格 header 按钮 -->
      <template #tableHeader="scope">
        <el-button type="primary" :icon="CirclePlus">
          新增用户
        </el-button>
        <el-button type="danger" :icon="Delete" plain :disabled="!scope.isSelected">
          批量删除用户
        </el-button>
      </template>
      <!-- 表格操作 -->
      <template #operation>
        <el-button type="primary" link :icon="View">
          查看
        </el-button>
        <el-button type="primary" link :icon="EditPen">
          编辑
        </el-button>
        <el-button type="danger" link :icon="Delete">
          删除
        </el-button>
      </template>
    </GeekerTable>
  </div>
</template>

<style scoped>

</style>
