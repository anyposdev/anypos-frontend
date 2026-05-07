import { useQuery } from '@tanstack/react-query'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  stock: number
  image?: string
}

const mockProducts: Product[] = [
  { id: '1', name: 'Burger', description: 'Classic beef burger', price: 8.99, category: 'Food', stock: 50 },
  { id: '2', name: 'Fries', description: 'Crispy french fries', price: 3.99, category: 'Food', stock: 100 },
  { id: '3', name: 'Coke', description: 'Cold soda', price: 2.49, category: 'Drinks', stock: 80 },
  { id: '4', name: 'Pizza', description: 'Cheese pizza', price: 12.99, category: 'Food', stock: 30 },
]

const fetchProducts = async (): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockProducts
}

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })
}
