import { Button, Card, CardBody, CardFooter, CardHeader, formatPrice } from '@anypos/ui'
import { useCartStore } from '@/features/cart'
import type { Product } from '../hooks'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem)

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader className="pb-0">
        <div className="mb-2 aspect-square w-full rounded-lg bg-default-100">
          <div className="flex h-full items-center justify-center text-default-400 text-2xl">
            {product.name[0]}
          </div>
        </div>
      </CardHeader>
      <CardBody className="py-2">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.category}</p>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="flex w-full items-center justify-between">
          <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          <Button
            size="sm"
            variant="primary"
            onPress={() => addItem({
              id: product.id,
              name: product.name,
              price: product.price,
            })}
          >
            Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
