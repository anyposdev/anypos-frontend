import { Card, CardBody, cn } from '@anypos/ui'

interface StatCardProps {
  title: string
  value: string
  change: string
  color: 'success' | 'primary' | 'secondary' | 'danger'
}

const colorClasses = {
  success: 'bg-success-50 border-success-200',
  primary: 'bg-primary-50 border-primary-200',
  secondary: 'bg-secondary-50 border-secondary-200',
  danger: 'bg-danger-50 border-danger-200',
}

export function StatCard({ title, value, change, color }: StatCardProps) {
  return (
    <Card className={cn('border', colorClasses[color])}>
      <CardBody className="p-4">
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-gray-500">{change}</p>
      </CardBody>
    </Card>
  )
}
