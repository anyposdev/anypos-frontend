import type { ChipProps as HeroChipProps } from '@heroui/react'
import { ChipRoot, Chip as HeroChip } from '@heroui/react'

export interface ChipProps extends HeroChipProps {
  /** Chip content */
  children: React.ReactNode
}

export function Chip(props: ChipProps) {
  return <HeroChip {...props} />
}

// Re-export for advanced usage
export { ChipRoot }
