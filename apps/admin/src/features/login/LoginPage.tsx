import { Card, CardBody, Button, Spinner, FormInput, FormSelect } from '@anypos/ui'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  role: z.enum(['admin', 'manager', 'cashier']),
})

type LoginFormData = z.infer<typeof loginSchema>

const roleOptions = [
  { id: 'admin', label: 'Admin' },
  { id: 'manager', label: 'Manager' },
  { id: 'cashier', label: 'Cashier' },
]

export const LoginPage = () => {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
      role: 'admin',
    },
  })

  const { handleSubmit, formState: { isSubmitting } } = methods

  const onSubmit = async (data: LoginFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (data.username && data.password) {
      localStorage.setItem('token', 'mock-token')
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        name: data.username,
        role: data.role,
      }))
      window.location.href = '/example/dashboard'
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardBody className="p-8">
          <h1 className="mb-6 text-center text-2xl font-bold">anyPOS Admin</h1>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              <FormSelect
                name="role"
                label="Role (for demo)"
                options={roleOptions}
                disabled={isSubmitting}
                required
              />
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
          <div className="mt-4 rounded-lg bg-warning-50 p-3 text-sm text-warning-800">
            <p className="font-medium">Demo roles:</p>
            <ul className="mt-1 list-inside list-disc">
              <li>Admin - Full access (Users page)</li>
              <li>Manager - Dashboard only</li>
              <li>Cashier - Dashboard only</li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
