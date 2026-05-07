import { formatPrice } from '@anypos/ui'
import { StatCard, RecentOrders, QuickActions } from './components'

const stats = {
  totalSales: 15420.50,
  ordersToday: 42,
  activeUsers: 8,
  lowStockItems: 3,
}

const mockOrders = [
  { id: '1001', customer: 'Walk-in Customer', total: 24.99, status: 'Completed' },
  { id: '1002', customer: 'Walk-in Customer', total: 15.50, status: 'In Progress' },
  { id: '1003', customer: 'Walk-in Customer', total: 42.00, status: 'Completed' },
  { id: '1004', customer: 'Walk-in Customer', total: 8.99, status: 'Pending' },
]

export const DashboardPage = () => {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Today's Sales"
          value={formatPrice(stats.totalSales)}
          change="+12% from yesterday"
          color="success"
        />
        <StatCard
          title="Orders Today"
          value={stats.ordersToday.toString()}
          change="5 pending"
          color="primary"
        />
        <StatCard
          title="Active Cashiers"
          value={stats.activeUsers.toString()}
          change="All stations online"
          color="secondary"
        />
        <StatCard
          title="Low Stock Alerts"
          value={stats.lowStockItems.toString()}
          change="Needs attention"
          color="danger"
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RecentOrders orders={mockOrders} />
        <QuickActions />
      </div>
    </div>
  )
}
