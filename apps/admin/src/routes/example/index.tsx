import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/example/')({
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: '/example/dashboard' })
    }
    else {
      throw redirect({ to: '/example/login' })
    }
  },
})
