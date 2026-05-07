import { Button, Card, CardBody, CardHeader, formatPrice } from '@anypos/ui'
import { useCartStore } from '../stores/cart-store'

export function CartSidebar() {
  const { items, removeItem, updateQuantity, clearCart, total, itemCount } = useCartStore()

  return (
    <Card className="h-full">
      <CardHeader className="pb-2 pt-4 px-4">
        <h2 className="text-lg font-bold">
          Cart (
          {itemCount()}
          {' '}
          items)
        </h2>
      </CardHeader>
      <CardBody className="gap-3">
        {items.length === 0
          ? (
              <p className="text-center text-gray-500">Cart is empty</p>
            )
          : (
              <>
                <div className="max-h-96 space-y-3 overflow-y-auto">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center justify-between rounded-lg border p-2">
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          {formatPrice(item.price)}
                          {' '}
                          x
                          {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="min-w-8 h-8 px-2"
                          onPress={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="min-w-8 h-8 px-2"
                          onPress={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                        <Button
                          size="sm"
                          variant="danger-soft"
                          className="ml-2 min-w-8 h-8 px-2"
                          onPress={() => removeItem(item.id)}
                        >
                          ×
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 border-t pt-4">
                  <div className="mb-4 flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>{formatPrice(total())}</span>
                  </div>
                  <Button variant="primary" className="mb-2 w-full">
                    Checkout
                  </Button>
                  <Button variant="ghost" className="w-full" onPress={clearCart}>
                    Clear Cart
                  </Button>
                </div>
              </>
            )}
      </CardBody>
    </Card>
  )
}
