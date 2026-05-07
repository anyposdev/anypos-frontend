import { createFileRoute } from '@tanstack/react-router'
import { POSPage } from '@/features/pos'

export const Route = createFileRoute('/example/pos')({
  component: POSPage,
})
