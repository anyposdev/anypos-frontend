import { createRootRoute, Link, Outlet, redirect } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Button } from '@anypos/ui'

export interface User {
  id: string
  name: string
  role: 'admin' | 'manager' | 'cashier'
}

export interface AuthContext {
  isAuthenticated: boolean
  user: User | null
}

const checkAuth = ():AuthContext => {
  const token = localStorage.getItem('token')
  const userStr = localStorage.getItem('user')
  
  if (!token || !userStr) {
    return { isAuthenticated: false, user: null }
  }
  
  try {
    const user = JSON.parse(userStr) as User
    return { isAuthenticated: true, user }
  }
  catch {
    return { isAuthenticated: false, user: null }
  }
}

const RootComponent = () => {
  const { auth } = Route.useRouteContext()

  return (
    <>
      {auth.isAuthenticated && (
        <header className="border-b bg-gray-50 p-4">
          <nav className="flex items-center justify-between">
            <div className="flex gap-4">
              <Link to="/example/dashboard" className="[&.active]:font-bold">
                Dashboard
              </Link>
              {auth.user?.role === 'admin' && (
                <Link to="/example/users" className="[&.active]:font-bold">
                  Users
                </Link>
              )}
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm">
                <span className="font-medium">{auth.user?.name}</span>
                <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                  {auth.user?.role}
                </span>
              </div>
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
}

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: () => {
    const auth = checkAuth()
    return { auth }
  },
  loader: ({ context, location }) => {
    const { pathname } = location

    if (pathname.startsWith('/example/users') && context.auth.user?.role !== 'admin') {
      throw redirect({ to: '/example/dashboard' })
    }
  },
})

