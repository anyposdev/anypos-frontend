import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { queryClient } from './libs/query-client'
import './index.css'

const router = createRouter({ routeTree })

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="light bg-background text-foreground min-h-screen">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </StrictMode>,
)
