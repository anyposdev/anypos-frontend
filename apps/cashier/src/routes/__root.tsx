import { Button } from '@anypos/ui'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export interface AuthContext {
  isAuthenticated: boolean
  user: { id: string, name: string, role: string } | null
}

// Mock auth check - replace with real authentication
function checkAuth(): AuthContext {
  const token = localStorage.getItem('token')
  const userStr = localStorage.getItem('user')

  if (!token || !userStr) {
    return { isAuthenticated: false, user: null }
  }

  try {
    const user = JSON.parse(userStr)
    return { isAuthenticated: true, user }
  }
  catch {
    return { isAuthenticated: false, user: null }
  }
}

export const Route = createRootRoute({
  component: function RootComponent() {
    const { auth } = Route.useRouteContext()

    return (
      <>
        {auth.isAuthenticated && (
          <header className="border-b p-4">
            <nav className="flex items-center justify-between">
              <div className="flex gap-4">
                <Link to="/example/pos" className="[&.active]:font-bold">
                  POS
                </Link>
                <Link to="/example/products" className="[&.active]:font-bold">
                  Products
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <span>{auth.user?.name}</span>
                <Button
                  size="sm"
                  variant="danger"
                  onPress={() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    window.location.href = '/example'
                  }}
                >
                  Logout
                </Button>
              </div>
            </nav>
          </header>
        )}
        <main className="p-4">
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </>
    )
  },
  beforeLoad: () => {
    const auth = checkAuth()
    return { auth }
  },
})
