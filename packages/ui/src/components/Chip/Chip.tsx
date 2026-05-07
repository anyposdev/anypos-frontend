import { Chip as HeroChip, ChipRoot } from '@heroui/react'
import type { ChipProps as HeroChipProps } from '@heroui/react'

export interface ChipProps extends HeroChipProps {
  /** Chip content */
  children: React.ReactNode
}

export const Chip = (props: ChipProps) => {
  return <HeroChip {...props} />
}

// Re-export for advanced usage
export { ChipRoot }
