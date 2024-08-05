import type { ComponentPublicInstance } from 'vue'
import type ProTable from '../components/ProTable/index.vue'
import type { ProTableProps } from './table-props'
import type { ColumnProps, EnumProps, FieldNamesProps, HeaderRenderScope, RenderScope, TypeProps } from './table-column'
import type { SearchProps, SearchRenderScope, SearchType } from './search-props'
import type { BreakPoint, Responsive } from './grid'
import type { Pageable, PaginationProps } from './pagination'

type ProTableInstance = Omit<InstanceType<typeof ProTable>, keyof ComponentPublicInstance | keyof ProTableProps>

export type {
  // table-props
  ProTableProps,

  // table-column
  ColumnProps,
  EnumProps,
  FieldNamesProps,
  HeaderRenderScope,
  RenderScope,
  TypeProps,

  // search-props
  SearchProps,
  SearchRenderScope,
  SearchType,

  // grid
  BreakPoint,
  Responsive,

  // pagination
  PaginationProps,
  Pageable,

  ProTableInstance,
}
