import type { TableProps as HeroTableProps } from '@heroui/react'
import {
  Table as HeroTable,
  TableBody,
  TableCell,
  TableColumn,
  TableContent,
  TableFooter,
  TableHeader,
  TableRoot,
  TableRow,
  TableScrollContainer,
} from '@heroui/react'

// Re-export table and all its sub-components
export const Table = HeroTable

export {
  TableBody,
  TableCell,
  TableColumn,
  TableContent,
  TableFooter,
  TableHeader,
  TableRoot,
  TableRow,
  TableScrollContainer,
}

export type { HeroTableProps as TableProps }
