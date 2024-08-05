import type { Ref, VNode } from 'vue'
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'
import type { SearchProps } from './search-props'

export type TypeProps = 'index' | 'selection' | 'radio' | 'expand' | 'sort'

export interface HeaderRenderScope<T> {
  $index: number
  column: TableColumnCtx<T>
  [key: string]: any
}

export interface RenderScope<T> {
  row: T
  $index: number
  column: TableColumnCtx<T>
  [key: string]: any
}

export interface FieldNamesProps {
  label: string
  value: string
  children?: string
}

export interface EnumProps {
  /** 选项框显示的文字 */
  label?: string
  /** 选项框值 */
  value?: string | number | boolean | any[]
  /** 是否禁用此选项 */
  disabled?: boolean
  /** 当 tag 为 true 时，此选择会指定 tag 显示类型 */
  tagType?: string
  /** 为树形选择时，可以通过 children 属性指定子选项 */
  children?: EnumProps[]
  /** 选项框值 */
  [key: string]: any
}

export interface ColumnProps<T = any>
  extends Partial<Omit<TableColumnCtx<T>, 'type' | 'children' | 'renderCell' | 'renderHeader'>> {
  /** 列类型 */
  type?: TypeProps
  /** 是否是标签展示 */
  tag?: boolean | Ref<boolean>
  /** 是否显示在表格当中 */
  isShow?: boolean | Ref<boolean>
  /** 是否在 ColSetting 中可配置 */
  isSetting?: boolean | Ref<boolean>
  /** 搜索项配置 */
  search?: SearchProps | undefined
  /** 枚举字典 */
  enum?: EnumProps[] | Ref<EnumProps[]> | ((params?: any) => Promise<any>)
  /** 当前单元格值是否根据 enum 格式化（示例：enum 只作为搜索项数据） */
  isFilterEnum?: boolean | Ref<boolean>
  /** 指定 label && value && children 的 key 值 */
  fieldNames?: FieldNamesProps
  /** 自定义表头内容渲染（tsx语法） */
  headerRender?: (scope: HeaderRenderScope<T>) => VNode
  /** 自定义单元格内容渲染（tsx语法） */
  render?: (scope: RenderScope<T>) => VNode | string
  /** 多级表头 */
  _children?: ColumnProps<T>[]
}
