<script setup lang="tsx">
import { h, reactive, ref } from 'vue'
import { ElDivider, ElMessage } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import En from 'element-plus/es/locale/lang/en'
import { CirclePlus, Delete, Download, EditPen, Moon, Sunny, Upload, View } from '@element-plus/icons-vue'

import { isDark, toggleDark } from '~/composables'

const spacer = h(ElDivider, { direction: 'vertical' })
const language = ref('zh')
const tableSize = ref('default')
const paginationSmall = ref(false)
const paginationAlign = ref('right')

// GeekerTable 实例
const geekerTableRef = ref()

// 自定义渲染表头（使用tsx语法）
function headerRender(scope) {
  return (
    <el-button type="primary" onClick={() => ElMessage.success('我是通过 tsx 语法渲染的表头')}>
      {scope.column.label}
    </el-button>
  )
}

// 表格配置项
const columns = reactive([
  { type: 'selection', fixed: 'left', width: 70 },
  { type: 'sort', label: 'Sort', width: 80 },
  { type: 'expand', label: 'Expand', width: 85 },
  {
    prop: 'username',
    label: '用户姓名',
    search: { el: 'input', tooltip: '我是搜索提示' },
    render: (scope) => {
      return (
        <el-button type="primary" link onClick={() => ElMessage.success('我是通过 tsx 语法渲染的内容')}>
          {scope.row.username}
        </el-button>
      )
    },
  },
  // {
  //   prop: 'gender',
  //   label: '性别',
  //   // 字典数据（本地数据）
  //   // enum: genderType,
  //   // 字典请求不带参数
  //   enum: getUserGender,
  //   // 字典请求携带参数
  //   // enum: () => getUserGender({ id: 1 }),
  //   search: { el: 'select', props: { filterable: true } },
  //   fieldNames: { label: 'genderLabel', value: 'genderValue' },
  // },
  {
    // 多级 prop
    prop: 'user.detail.age',
    label: '年龄',
    search: {
      // 自定义 search 显示内容
      render: ({ searchParam }) => {
        return (
          <div class="flx-center">
            <el-input vModel_trim={searchParam.minAge} placeholder="最小年龄" />
            <span class="mr10 ml10">-</span>
            <el-input vModel_trim={searchParam.maxAge} placeholder="最大年龄" />
          </div>
        )
      },
    },
  },
  { prop: 'idCard', label: '身份证号', search: { el: 'input' } },
  { prop: 'email', label: '邮箱' },
  { prop: 'address', label: '居住地址' },
  // {
  //   prop: 'status',
  //   label: '用户状态',
  //   enum: getUserStatus,
  //   search: { el: 'tree-select', props: { filterable: true } },
  //   fieldNames: { label: 'userLabel', value: 'userStatus' },
  //   render: (scope) => {
  //     return (
  //       <>
  //         {BUTTONS.value.status
  //           ? (
  //               <el-switch
  //                 model-value={scope.row.status}
  //                 active-text={scope.row.status ? '启用' : '禁用'}
  //                 active-value={1}
  //                 inactive-value={0}
  //                 onClick={() => changeStatus(scope.row)}
  //               />
  //             )
  //           : (
  //               <el-tag type={scope.row.status ? 'success' : 'danger'}>{scope.row.status ? '启用' : '禁用'}</el-tag>
  //             )}
  //       </>
  //     )
  //   },
  // },
  {
    prop: 'createTime',
    label: '创建时间',
    headerRender,
    width: 180,
    search: {
      el: 'date-picker',
      span: 2,
      props: { type: 'datetimerange', valueFormat: 'YYYY-MM-DD HH:mm:ss' },
      defaultValue: ['2022-11-12 11:35:00', '2022-12-12 11:35:00'],
    },
  },
  { prop: 'operation', label: '操作', fixed: 'right', width: 330 },
])
const tableData = [
  {
    id: '862701853553853856',
    username: '谢洋',
    gender: 1,
    user: {
      detail: {
        age: 26,
      },
    },
    idCard: '862701853553853856',
    email: 'w.ehyfupm@wwbqk.ye',
    address: '江西省 南昌市',
    createTime: '1990-06-18 03:52:30',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '674838268660604344',
    username: '毛秀兰',
    gender: 1,
    user: {
      detail: {
        age: 11,
      },
    },
    idCard: '674838268660604344',
    email: 't.ernwv@gjiuaas.dm',
    address: '云南省 文山壮族苗族自治州',
    createTime: '2005-10-21 00:04:23',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '267012275367930335',
    username: '叶勇',
    gender: 1,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '267012275367930335',
    email: 'i.livfnmriig@ubghnynsgg.ae',
    address: '江苏省 苏州市',
    createTime: '1991-12-12 17:04:56',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '013270364275187188',
    username: '唐明',
    gender: 2,
    user: {
      detail: {
        age: 13,
      },
    },
    idCard: '013270364275187188',
    email: 'k.meop@xdfqp.as',
    address: '青海省 海南藏族自治州',
    createTime: '1982-03-10 12:23:53',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '815952366584036328',
    username: '姚军',
    gender: 2,
    user: {
      detail: {
        age: 29,
      },
    },
    idCard: '815952366584036328',
    email: 'x.kdw@gwzgpo.cn',
    address: '香港特别行政区 新界',
    createTime: '1993-01-23 17:31:59',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
  },
  {
    id: '512188693822848867',
    username: '谢静',
    gender: 1,
    user: {
      detail: {
        age: 23,
      },
    },
    idCard: '512188693822848867',
    email: 'q.bdr@vix.az',
    address: '山东省 聊城市',
    createTime: '1983-09-24 07:13:53',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
  },
  {
    id: '166570386772617124',
    username: '常明',
    gender: 2,
    user: {
      detail: {
        age: 15,
      },
    },
    idCard: '166570386772617124',
    email: 'u.vue@bvn.gu',
    address: '浙江省 舟山市',
    createTime: '2001-11-13 13:46:36',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
  },
  {
    id: '999376847159147665',
    username: '林平',
    gender: 2,
    user: {
      detail: {
        age: 28,
      },
    },
    idCard: '999376847159147665',
    email: 'w.shuwdie@hiedxalb.sn',
    address: '湖北省 荆门市',
    createTime: '1980-11-27 17:25:15',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '271476672767295343',
    username: '姜涛',
    gender: 2,
    user: {
      detail: {
        age: 22,
      },
    },
    idCard: '271476672767295343',
    email: 'v.jzrhkfez@ndsxzmdob.vg',
    address: '宁夏回族自治区 固原市',
    createTime: '2015-03-10 00:49:55',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '734812112233530676',
    username: '董涛',
    gender: 1,
    user: {
      detail: {
        age: 21,
      },
    },
    idCard: '734812112233530676',
    email: 'i.slsndcu@vhtsspoge.re',
    address: '天津 天津市',
    createTime: '1995-04-02 14:45:52',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '792385419278476361',
    username: '钱娟',
    gender: 2,
    user: {
      detail: {
        age: 12,
      },
    },
    idCard: '792385419278476361',
    email: 'v.bmvafr@qrvdoetm.sy',
    address: '海南省 三亚市',
    createTime: '2015-05-18 09:34:00',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
  },
  {
    id: '298535758748223187',
    username: '文军',
    gender: 2,
    user: {
      detail: {
        age: 28,
      },
    },
    idCard: '298535758748223187',
    email: 'n.prvnggje@axqxof.bh',
    address: '安徽省 铜陵市',
    createTime: '2018-12-27 07:23:36',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
  },
  {
    id: '137507833585171635',
    username: '黎秀兰',
    gender: 1,
    user: {
      detail: {
        age: 29,
      },
    },
    idCard: '137507833585171635',
    email: 'q.gfwdnx@paws.lk',
    address: '福建省 三明市',
    createTime: '2013-04-13 16:46:57',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '754614249125517522',
    username: '朱平',
    gender: 2,
    user: {
      detail: {
        age: 23,
      },
    },
    idCard: '754614249125517522',
    email: 'd.ytdeszbq@kgygjauupr.an',
    address: '黑龙江省 七台河市',
    createTime: '1987-03-19 03:02:39',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '827846452651106672',
    username: '雷芳',
    gender: 2,
    user: {
      detail: {
        age: 27,
      },
    },
    idCard: '827846452651106672',
    email: 's.ocykfye@bmsykjvw.dm',
    address: '湖南省 湘潭市',
    createTime: '1971-01-22 04:25:22',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
  },
  {
    id: '424576235556553670',
    username: '林强',
    gender: 1,
    user: {
      detail: {
        age: 10,
      },
    },
    idCard: '424576235556553670',
    email: 'd.kkfesct@juedbchnv.wf',
    address: '海南省 海口市',
    createTime: '1976-05-22 01:04:17',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
  },
  {
    id: '678577576727849633',
    username: '白刚',
    gender: 1,
    user: {
      detail: {
        age: 26,
      },
    },
    idCard: '678577576727849633',
    email: 'n.ljjkhuz@cnynuh.cq',
    address: '台湾 南投县',
    createTime: '1970-07-11 02:19:55',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '115269372615574502',
    username: '吕强',
    gender: 2,
    user: {
      detail: {
        age: 24,
      },
    },
    idCard: '115269372615574502',
    email: 'w.pezfrbqbk@ssujimczj.kw',
    address: '香港特别行政区 香港岛',
    createTime: '2003-12-03 13:31:34',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
  },
  {
    id: '298532675158371610',
    username: '贾芳',
    gender: 2,
    user: {
      detail: {
        age: 24,
      },
    },
    idCard: '298532675158371610',
    email: 'p.qvjodqojn@bbukhkttxw.mq',
    address: '浙江省 嘉兴市',
    createTime: '1984-06-27 23:55:15',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
  },
  {
    id: '335815671264778765',
    username: '袁勇',
    gender: 2,
    user: {
      detail: {
        age: 22,
      },
    },
    idCard: '335815671264778765',
    email: 'k.pegqed@fbfk.sl',
    address: '浙江省 宁波市',
    createTime: '1989-06-11 21:17:08',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
  },
  {
    id: '604426837835285863',
    username: '沈洋',
    gender: 2,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '604426837835285863',
    email: 'i.fosjeqy@fcpjdi.中国互联.公司',
    address: '四川省 甘孜藏族自治州',
    createTime: '1988-04-05 07:15:29',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '179961433332215545',
    username: '阎杰',
    gender: 2,
    user: {
      detail: {
        age: 12,
      },
    },
    idCard: '179961433332215545',
    email: 'u.qexx@swnd.my',
    address: '四川省 南充市',
    createTime: '1998-01-01 13:37:33',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
  },
  {
    id: '622748516824584764',
    username: '廖芳',
    gender: 2,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '622748516824584764',
    email: 'e.tljqkeyk@bhh.zr',
    address: '广西壮族自治区 北海市',
    createTime: '1978-12-20 23:34:20',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '816308492438717143',
    username: '韩超',
    gender: 2,
    user: {
      detail: {
        age: 29,
      },
    },
    idCard: '816308492438717143',
    email: 'h.zgccujtj@thiyitxujx.ve',
    address: '青海省 黄南藏族自治州',
    createTime: '1988-05-06 06:44:10',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '424374981365218259',
    username: '阎强',
    gender: 1,
    user: {
      detail: {
        age: 30,
      },
    },
    idCard: '424374981365218259',
    email: 'm.ylgyo@kwsgokuk.gi',
    address: '四川省 广安市',
    createTime: '1975-09-07 23:18:19',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
]

function onGeekerTableInstance() {
  console.log('geekerTableRef :>> ', geekerTableRef.value)
}
</script>

<template>
  <div class="app-container">
    <el-config-provider size="default" :locale="language ? En : zhCn">
      <div class="card">
        <el-space wrap :spacer="spacer">
          <el-switch :model-value="isDark" :active-icon="Sunny" :inactive-icon="Moon" inline-prompt size="default" @change="toggleDark" />
          <el-switch v-model="language" inline-prompt size="default">
            <template #active-action>
              <span class="custom-inactive-action">英</span>
            </template>
            <template #inactive-action>
              <span class="custom-inactive-action">中</span>
            </template>
          </el-switch>
          <el-button type="primary">
            {{ '刷新表格' }}
          </el-button>
          <el-button type="primary">
            {{ '空表格' }}
          </el-button>
          <el-tooltip content="请打开浏览器控制台查看打印信息">
            <el-button type="primary" @click="onGeekerTableInstance">
              {{ '获取组件表格实例' }}
            </el-button>
          </el-tooltip>
          <div class="geeker-radio">
            <p class="geeker-small">
              {{ '表格大小：' }}
            </p>
            <el-radio-group v-model="tableSize">
              <el-radio-button value="large">
                large
              </el-radio-button>
              <el-radio-button value="default">
                default
              </el-radio-button>
              <el-radio-button value="small">
                small
              </el-radio-button>
            </el-radio-group>
          </div>
          <div class="geeker-radio">
            <p class="geeker-small">
              {{ '分页大小：' }}
            </p>
            <el-radio-group v-model="paginationSmall">
              <el-radio-button :value="false">
                no small
              </el-radio-button>
              <el-radio-button :value="true">
                small
              </el-radio-button>
            </el-radio-group>
          </div>
          <div class="geeker-radio">
            <p class="geeker-small">
              {{ '分页的对齐方式：' }}
            </p>
            <el-radio-group v-model="paginationAlign">
              <el-radio-button value="right">
                right
              </el-radio-button>
              <el-radio-button value="center">
                center
              </el-radio-button>
              <el-radio-button value="left">
                left
              </el-radio-button>
            </el-radio-group>
          </div>
        </el-space>
      </div>

      <div class="table-content table-box">
        <GeekerTable ref="geekerTableRef" :columns="columns" :data="tableData">
          <!-- 表格 header 按钮 -->
          <template #tableHeader="scope">
            <el-button type="primary" :icon="CirclePlus">
              新增用户
            </el-button>
            <el-button type="primary" :icon="Upload" plain>
              批量添加用户
            </el-button>
            <el-button type="primary" :icon="Download" plain>
              导出用户数据
            </el-button>
            <el-button type="danger" :icon="Delete" plain :disabled="!scope.isSelected">
              批量删除用户
            </el-button>
          </template>
          <!-- usernameHeader -->
          <template #usernameHeader="scope">
            <el-button type="primary" @click="ElMessage.success('我是通过作用域插槽渲染的表头')">
              {{ scope.column.label }}
            </el-button>
          </template>
          <!-- createTime -->
          <template #createTime="scope">
            <el-button type="primary" link @click="ElMessage.success('我是通过作用域插槽渲染的内容')">
              {{ scope.row.createTime }}
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
    </el-config-provider>
  </div>
</template>

<style scoped>
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

.table-content {
  margin-top: 10px;
}

.geeker-radio {
  display: flex;
  align-items: center;
}

.geeker-small {
  font-size: 14px;
  line-height: 20px;
}
</style>
