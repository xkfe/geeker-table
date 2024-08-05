import type { ColumnProps } from './table-column'
import type { BreakPoint } from './grid'

export interface ProTableProps {
  /** 列配置项  ==> 必传 */
  columns: ColumnProps[] //
  /** 静态 table data 数据，若存在则不会使用 requestApi 返回的 data ==> 非必传 */
  data?: any[]
  /** 请求表格数据的 api ==> 非必传 */
  requestApi?: (params: any) => Promise<any>
  /** 是否自动执行请求 api ==> 非必传（默认为true） */
  requestAuto?: boolean
  /** 表格 api 请求错误监听 ==> 非必传 */
  requestError?: (params: any) => void
  /** 返回数据的回调函数，可以对数据进行处理 ==> 非必传 */
  dataCallback?: (data: any) => any
  /** 表格标题 ==> 非必传 */
  title?: string
  /** 是否需要分页组件 ==> 非必传（默认为true） */
  pagination?: boolean
  /** 初始化请求参数 ==> 非必传（默认为{}） */
  initParam?: any
  /** 是否带有纵向边框 ==> 非必传（默认为true） */
  border?: boolean
  /** 是否显示表格功能按钮 ==> 非必传（默认为true） */
  toolButton?: ('refresh' | 'setting' | 'search')[] | boolean
  /** 行数据的 Key，用来优化 Table 的渲染，当表格数据多选时，所指定的 id ==> 非必传（默认为 id） */
  rowKey?: string
  /** 表格搜索项 每列占比配置 ==> 非必传 { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 } */
  searchCol?: number | Record<BreakPoint, number>
}
