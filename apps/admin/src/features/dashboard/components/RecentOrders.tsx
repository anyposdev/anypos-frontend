import { Card, CardBody, CardHeader, formatPrice } from '@anypos/ui'

interface Order {
  id: string
  customer: string
  total: number
  status: string
}

interface RecentOrdersProps {
  orders: Order[]
}

export const RecentOrders = ({ orders }: RecentOrdersProps) => {
  return (
    <Card>
      <CardHeader className="pb-0 pt-4 px-4">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
      </CardHeader>
      <CardBody className="gap-2">
        {orders.map(order => (
          <div
            key={order.id}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div>
              <p className="font-medium">Order #{order.id}</p>
              <p className="text-sm text-gray-600">{order.customer}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">{formatPrice(order.total)}</p>
              <p className="text-sm text-gray-600">{order.status}</p>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  )
}
