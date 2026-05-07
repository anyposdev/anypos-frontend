import { Input as HeroInput } from '@heroui/react'
import type { InputProps as HeroInputProps } from '@heroui/react'

export interface InputProps extends HeroInputProps {
  /** Optional: Add left icon/prefix */
  startContent?: React.ReactNode
  /** Optional: Add right icon/suffix */
  endContent?: React.ReactNode
}

export const Input = (props: InputProps) => {
  return <HeroInput {...props} />
}
