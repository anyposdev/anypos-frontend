import { Card, CardBody, Spinner } from '@anypos/ui'
import { CartSidebar } from '@/features/cart'
import { ProductCard, useProducts } from '@/features/product'

export function POSPage() {
  const { data: products, isLoading } = useProducts()

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <h1 className="mb-4 text-2xl font-bold">Point of Sale</h1>

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
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {products?.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
      </div>

      <div className="w-80">
        <CartSidebar />
      </div>
    </div>
  )
}
