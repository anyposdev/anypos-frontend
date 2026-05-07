import { useQuery } from '@tanstack/react-query'

export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'manager' | 'cashier'
  isActive: boolean
}

const mockUsers: User[] = [
  { id: '1', name: 'John Admin', email: 'john@anypos.com', role: 'admin', isActive: true },
  { id: '2', name: 'Sarah Manager', email: 'sarah@anypos.com', role: 'manager', isActive: true },
  { id: '3', name: 'Mike Cashier', email: 'mike@anypos.com', role: 'cashier', isActive: true },
  { id: '4', name: 'Lisa Cashier', email: 'lisa@anypos.com', role: 'cashier', isActive: false },
]

const fetchUsers = async (): Promise<User[]> => {
  await new Promise(resolve => setTimeout(resolve, 600))
  return mockUsers
}

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}
