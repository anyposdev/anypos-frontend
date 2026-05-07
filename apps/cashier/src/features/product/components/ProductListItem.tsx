import type { Product } from '../hooks'
import { Card, CardBody, formatPrice } from '@anypos/ui'

interface ProductListItemProps {
  product: Product
}

export function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Card>
      <CardBody className="flex items-center justify-between p-4">
        <div>
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.category}</p>
        </div>
        <div className="text-lg font-bold">
          {formatPrice(product.price)}
        </div>
      </CardBody>
    </Card>
  )
}
