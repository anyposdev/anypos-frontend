import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/example/')({
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: '/example/pos' })
    }
    else {
      throw redirect({ to: '/example/login' })
    }
  },
})
