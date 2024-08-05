<script setup lang="ts">
import { ElMessage } from 'element-plus'

const columns = [
  { type: 'selection', width: 55, fixed: 'left' },
  { prop: 'username', label: '用户姓名', width: 140, fixed: 'left' },
  { prop: 'gender', label: '性别', width: 120 },
  { prop: 'age', label: '年龄', width: 100 },
  { prop: 'idCard', label: '身份证号', formatter: formattedIdCard, width: 300 },
  { prop: 'email', label: '邮箱', width: 200 },
  { prop: 'address', label: '居住地址', width: 200 },
  { prop: 'status', label: '用户状态', width: 120 },
  { prop: 'createTime', label: '创建时间', sortable: true, width: 200 },
  { prop: 'fixedColumn', label: '固定列测试', width: 500 },
  { prop: 'operation', label: '操作', fixed: 'right', width: 200 },
]
const tableData = [
  {
    id: '1',
    username: '谢洋',
    gender: '男',
    age: 26,
    idCard: '862701853553853856',
    email: 'w.ehyfupm@wwbqk.ye',
    address: '江西省 南昌市',
    createTime: '1990-06-18 03:52:30',
    status: 0,
  },
  {
    id: '2',
    username: '毛秀兰',
    gender: '女',
    age: 11,
    idCard: '674838268660604344',
    email: 't.ernwv@gjiuaas.dm',
    address: '云南省 文山壮族苗族自治州',
    createTime: '2005-10-21 00:04:23',
    status: 0,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '3',
    username: '叶勇',
    gender: '男',
    age: 25,
    idCard: '267012275367930335',
    email: 'i.livfnmriig@ubghnynsgg.ae',
    address: '江苏省 苏州市',
    createTime: '1991-12-12 17:04:56',
    status: 0,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '4',
    username: '唐明',
    gender: '男',
    age: 13,
    idCard: '013270364275187188',
    email: 'k.meop@xdfqp.as',
    address: '青海省 海南藏族自治州',
    createTime: '1982-03-10 12:23:53',
    status: 1,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '5',
    username: '姚军',
    gender: '男',
    age: 29,
    idCard: '815952366584036328',
    email: 'x.kdw@gwzgpo.cn',
    address: '香港特别行政区 新界',
    createTime: '1993-01-23 17:31:59',
    status: 1,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '6',
    username: '谢静',
    gender: '女',
    age: 23,
    idCard: '512188693822848867',
    email: 'q.bdr@vix.az',
    address: '山东省 聊城市',
    createTime: '1983-09-24 07:13:53',
    status: 1,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '7',
    username: '常明',
    gender: '男',
    age: 15,
    idCard: '166570386772617124',
    email: 'u.vue@bvn.gu',
    address: '浙江省 舟山市',
    createTime: '2001-11-13 13:46:36',
    status: 1,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '8',
    username: '林平',
    gender: '男',
    age: 28,
    idCard: '999376847159147665',
    email: 'w.shuwdie@hiedxalb.sn',
    address: '湖北省 荆门市',
    createTime: '1980-11-27 17:25:15',
    status: 1,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '9',
    username: '姜涛',
    gender: '男',
    age: 22,
    idCard: '271476672767295343',
    email: 'v.jzrhkfez@ndsxzmdob.vg',
    address: '宁夏回族自治区 固原市',
    createTime: '2015-03-10 00:49:55',
    status: 0,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '10',
    username: '董涛',
    gender: '女',
    age: 21,
    idCard: '734812112233530676',
    email: 'i.slsndcu@vhtsspoge.re',
    address: '天津 天津市',
    createTime: '1995-04-02 14:45:52',
    status: 0,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '11',
    username: '钱娟',
    gender: '女',
    age: 12,
    idCard: '792385419278476361',
    email: 'v.bmvafr@qrvdoetm.sy',
    address: '海南省 三亚市',
    createTime: '2015-05-18 09:34:00',
    status: 1,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '12',
    username: '文军',
    gender: '男',
    age: 28,
    idCard: '298535758748223187',
    email: 'n.prvnggje@axqxof.bh',
    address: '安徽省 铜陵市',
    createTime: '2018-12-27 07:23:36',
    status: 1,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '13',
    username: '黎秀兰',
    gender: '女',
    age: 29,
    idCard: '137507833585171635',
    email: 'q.gfwdnx@paws.lk',
    address: '福建省 三明市',
    createTime: '2013-04-13 16:46:57',
    status: 1,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '14',
    username: '朱平',
    gender: '男',
    age: 23,
    idCard: '754614249125517522',
    email: 'd.ytdeszbq@kgygjauupr.an',
    address: '黑龙江省 七台河市',
    createTime: '1987-03-19 03:02:39',
    status: 0,
    fixedColumn: '固定列测试,撑开列宽',
  },
  {
    id: '15',
    username: '雷芳',
    gender: '女',
    age: 27,
    idCard: '827846452651106672',
    email: 's.ocykfye@bmsykjvw.dm',
    address: '湖南省 湘潭市',
    createTime: '1971-01-22 04:25:22',
    status: 1,
  },
]

/**
 * @description 正则格式化身份证号码
 */
function formattedIdCard(value: string) {
  return value.replace(/(\d{6})(\d{12})(\d{2})/, '$1**********$3')
}

function handleCurrentChange(val: typeof tableData[0]) {
  console.group(`当前行数据-${val.username}`)
  console.log(val)
  console.groupEnd()
  ElMessage.success('打开控制台查看当前行数据')
}
function handleSelectionChange(val: typeof tableData[0][]) {
  console.group('选中行数据')
  console.log(val)
  console.log(val.map(item => item.id))
  console.groupEnd()
  ElMessage.success('打开控制台查看选中行数据')
}
</script>

<template>
  <div class="table-content table-box">
    <GeekerTable :columns="columns" :data="tableData" :tool-button="false" stripe highlight-current-row @current-change="handleCurrentChange" @selection-change="handleSelectionChange" />
  </div>
</template>

<style scoped>

</style>
