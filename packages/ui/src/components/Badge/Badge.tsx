import { Badge as HeroBadge, BadgeRoot } from '@heroui/react'
import type { BadgeProps as HeroBadgeProps } from '@heroui/react'

export interface BadgeProps extends HeroBadgeProps {
  /** Badge content */
  children: React.ReactNode
}

export const Badge = (props: BadgeProps) => {
  return <HeroBadge {...props} />
}

// Re-export for advanced usage
export { BadgeRoot }
