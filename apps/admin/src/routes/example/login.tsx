import { createFileRoute, redirect } from '@tanstack/react-router'
import { LoginPage } from '@/features/login'

export const Route = createFileRoute('/example/login')({
  component: LoginPage,
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: '/example/dashboard' })
    }
  },
})
