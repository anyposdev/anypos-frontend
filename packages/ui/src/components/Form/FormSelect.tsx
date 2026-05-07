import { Select, ListBox, Label } from '@heroui/react'
import { useFormContext, Controller } from 'react-hook-form'

export interface FormSelectOption {
  id: string
  label: string
}

export interface FormSelectProps {
  name: string
  label?: string
  options: FormSelectOption[]
  placeholder?: string
  disabled?: boolean
  required?: boolean
}

export const FormSelect = ({ name, label, options, placeholder, disabled = false, required = false }: FormSelectProps) => {
  const { control, formState: { errors } } = useFormContext()
  const error = errors[name]?.message as string | undefined

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref, ...field } }) => (
        <Select
          {...field}
          ref={ref}
          selectedKey={value}
          onSelectionChange={(key) => {
            const selectedValue = key as string
            onChange(selectedValue)
          }}
          isDisabled={disabled}
          isRequired={required}
          isInvalid={!!error}
          placeholder={placeholder || 'Select an option'}
          className={error ? 'data-[invalid=true]' : ''}
        >
          {label && <Label>{label}</Label>}
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {options.map((option) => (
                <ListBox.Item key={option.id} id={option.id} textValue={option.label}>
                  {option.label}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      )}
    />
  )
}
