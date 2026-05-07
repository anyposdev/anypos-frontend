import { Card, CardBody, Spinner } from '@anypos/ui'
import { ProductListItem, useProducts } from '@/features/product'

export function ProductsPage() {
  const { data: products, isLoading } = useProducts()

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Product Catalog</h1>
      <p className="mb-4 text-gray-600">
        Browse all products. Cart items are preserved when you navigate back to POS.
      </p>

      {isLoading
        ? (
            <Card>
              <CardBody className="flex items-center justify-center py-12">
                <Spinner size="lg" />
                <span className="ml-2">Loading products...</span>
              </CardBody>
            </Card>
          )
        : (
            <div className="space-y-2">
              {products?.map(product => (
                <ProductListItem key={product.id} product={product} />
              ))}
            </div>
          )}
    </div>
  )
}
