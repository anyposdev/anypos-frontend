import { create } from 'zustand'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

interface CartState {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  total: () => number
  itemCount: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (item) => {
    const { items } = get()
    const existingItem = items.find(i => i.id === item.id)

    if (existingItem) {
      set({
        items: items.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      })
    }
    else {
      set({ items: [...items, { ...item, quantity: 1 }] })
    }
  },

  removeItem: (id) => {
    const { items } = get()
    set({ items: items.filter(i => i.id !== id) })
  },

  updateQuantity: (id, quantity) => {
    const { items } = get()
    if (quantity <= 0) {
      set({ items: items.filter(i => i.id !== id) })
    }
    else {
      set({
        items: items.map(i =>
          i.id === id ? { ...i, quantity } : i
        ),
      })
    }
  },

  clearCart: () => set({ items: [] }),

  total: () => {
    const { items } = get()
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },

  itemCount: () => {
    const { items } = get()
    return items.reduce((sum, item) => sum + item.quantity, 0)
  },
}))
