import type { InputProps } from '../Input/Input'
import { Controller, useFormContext } from 'react-hook-form'
import { Input } from '../Input/Input'

export interface FormInputProps extends Omit<InputProps, 'name'> {
  name: string
  label?: string
}

export function FormInput({ name, label, ...props }: FormInputProps) {
  const { control, formState: { errors } } = useFormContext()
  const error = errors[name]?.message as string | undefined

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="w-full">
          {label && (
            <label className="mb-1 block text-sm text-gray-700">
              {label}
            </label>
          )}
          <Input
            {...field}
            {...props}
          />
          {error && (
            <p className="mt-1 text-sm text-danger">{error}</p>
          )}
        </div>
      )}
    />
  )
}
