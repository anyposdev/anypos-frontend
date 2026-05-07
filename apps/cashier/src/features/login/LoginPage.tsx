import { LoginForm } from './components'

export function LoginPage() {
  const handleLogin = async (username: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (username && password) {
          localStorage.setItem('token', 'mock-token')
          localStorage.setItem('user', JSON.stringify({
            id: '1',
            name: username,
            role: 'cashier',
          }))
          window.location.href = '/example/pos'
          resolve()
        }
        else {
          reject(new Error('Invalid credentials'))
        }
      }, 1000)
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoginForm
        onSubmit={handleLogin}
        title="anyPOS Cashier"
      >
        <p className="mt-4 text-center text-sm text-gray-500">
          Demo: any username/password works
        </p>
      </LoginForm>
    </div>
  )
}
