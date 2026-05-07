import type { BadgeProps as HeroBadgeProps } from '@heroui/react'
import { BadgeRoot, Badge as HeroBadge } from '@heroui/react'

export interface BadgeProps extends HeroBadgeProps {
  children: React.ReactNode
}

export function Badge(props: BadgeProps) {
  return <HeroBadge {...props} />
}

// Re-export for advanced usage
export { BadgeRoot }
