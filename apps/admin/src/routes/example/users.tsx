import { createFileRoute } from '@tanstack/react-router'
import { UsersPage } from '@/features/users'

export const Route = createFileRoute('/example/users')({
  component: UsersPage,
})
