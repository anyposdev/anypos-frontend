import type { InputProps as HeroInputProps } from '@heroui/react'
import { Input as HeroInput } from '@heroui/react'

export interface InputProps extends HeroInputProps {
  /** Optional: Add left icon/prefix */
  startContent?: React.ReactNode
  /** Optional: Add right icon/suffix */
  endContent?: React.ReactNode
}

export function Input(props: InputProps) {
  return <HeroInput {...props} />
}
