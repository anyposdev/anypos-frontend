import { Card, CardBody, Button, Spinner, FormInput } from '@anypos/ui'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

export const LoginForm = ({ onSubmit, error, title = 'Login', children }: LoginFormProps) => {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const { handleSubmit, formState: { isSubmitting } } = methods

  const handleFormSubmit = async (data: LoginFormData) => {
    try {
      await onSubmit(data.username, data.password)
    }
    catch (err) {
      // Error handling is done by the parent component
      throw err
    }
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
