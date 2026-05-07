import { Button, Card, CardBody, FormInput, Spinner } from '@anypos/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
})

type LoginFormData = z.infer<typeof loginSchema>

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void | Promise<void>
  error?: string
  title?: string
  children?: React.ReactNode
}

export function LoginForm({ onSubmit, error, title = 'Login', children }: LoginFormProps) {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const { handleSubmit, formState: { isSubmitting } } = methods

  const handleFormSubmit = async (data: LoginFormData) => {
    await onSubmit(data.username, data.password)
  }

  return (
    <Card className="w-full max-w-md">
      <CardBody className="p-8">
        <h1 className="mb-6 text-center text-2xl font-bold">{title}</h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
            <FormInput
              name="username"
              label="Username"
              type="text"
              placeholder="Enter username"
              disabled={isSubmitting}
            />
            <FormInput
              name="password"
              label="Password"
              type="password"
              placeholder="Enter password"
              disabled={isSubmitting}
            />
            {error && (
              <p className="text-sm text-danger">{error}</p>
            )}
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              isLoading={isSubmitting}
            >
              {isSubmitting ? <Spinner size="sm" /> : 'Login'}
            </Button>
          </form>
        </FormProvider>
        {children}
      </CardBody>
    </Card>
  )
}
