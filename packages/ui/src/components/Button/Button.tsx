import type { ButtonProps as HeroButtonProps } from '@heroui/react'
import { Button as HeroButton } from '@heroui/react'

export interface ButtonProps extends HeroButtonProps {
  /** @deprecated Use isPending instead */
  isLoading?: boolean
}

export function Button({ children, isLoading, isPending, ...props }: ButtonProps) {
  // Support both isLoading (deprecated) and isPending (v3 API)
  const pending = isPending ?? isLoading
  const buttonProps = pending !== undefined
    ? { ...props, isPending: pending }
    : props

  return (
    <HeroButton {...buttonProps}>
      {children}
    </HeroButton>
  )
}
