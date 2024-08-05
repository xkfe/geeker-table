import type { Ref, VNode } from 'vue'
import type { EnumProps } from './table-column'
import type { BreakPoint, Responsive } from './grid'

export type SearchType =
  | 'input'
  | 'input-number'
  | 'select'
  | 'select-v2'
  | 'tree-select'
  | 'cascader'
  | 'date-picker'
  | 'time-picker'
  | 'time-select'
  | 'switch'
  | 'slider'

export interface SearchRenderScope {
  searchParam: { [key: string]: any }
  placeholder: string
  clearable: boolean
  options: EnumProps[]
  data: EnumProps[]
}

export type SearchProps = {
  el?: SearchType // 当前项搜索框的类型
  label?: string // 当前项搜索框的 label
  props?: any // 搜索项参数，根据 element plus 官方文档来传递，该属性所有值会透传到组件
  key?: string // 当搜索项 key 不为 prop 属性时，可通过 key 指定
  tooltip?: string // 搜索提示
  order?: number // 搜索项排序（从大到小）
  span?: number // 搜索项所占用的列数，默认为 1 列
  offset?: number // 搜索字段左侧偏移列数
  defaultValue?: string | number | boolean | any[] | Ref<any> // 搜索项默认值
  render?: (scope: SearchRenderScope) => VNode // 自定义搜索内容渲染（tsx语法）
} & Partial<Record<BreakPoint, Responsive>>
