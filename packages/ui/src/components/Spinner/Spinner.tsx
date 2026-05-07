import type { SpinnerProps as HeroSpinnerProps } from '@heroui/react'
import { Spinner as HeroSpinner, SpinnerRoot } from '@heroui/react'

export interface SpinnerProps extends HeroSpinnerProps {}

export function Spinner(props: SpinnerProps) {
  return <HeroSpinner {...props} />
}

// Re-export for advanced usage
export { SpinnerRoot }
