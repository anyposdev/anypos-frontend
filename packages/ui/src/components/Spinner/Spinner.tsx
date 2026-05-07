import { Spinner as HeroSpinner, SpinnerRoot } from '@heroui/react'
import type { SpinnerProps as HeroSpinnerProps } from '@heroui/react'

export interface SpinnerProps extends HeroSpinnerProps {}

export const Spinner = (props: SpinnerProps) => {
  return <HeroSpinner {...props} />
}

// Re-export for advanced usage
export { SpinnerRoot }
