import type { Pageable } from '../../types'

export interface StateProps {
  tableData: any[]
  pageable: Pageable
  searchParam: {
    [key: string]: any
  }
  searchInitParam: {
    [key: string]: any
  }
  totalParam: {
    [key: string]: any
  }
  icon?: {
    [key: string]: any
  }
}
