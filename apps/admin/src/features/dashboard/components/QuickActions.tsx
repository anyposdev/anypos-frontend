import { Button, Card, CardBody, CardHeader } from '@anypos/ui'

interface QuickActionsProps {
  onViewReports?: () => void
  onManageProducts?: () => void
  onSystemSettings?: () => void
}

export function QuickActions({
  onViewReports,
  onManageProducts,
  onSystemSettings,
}: QuickActionsProps) {
  return (
    <Card>
      <CardHeader className="pb-0 pt-4 px-4">
        <h2 className="text-lg font-semibold">Quick Actions</h2>
      </CardHeader>
      <CardBody className="gap-2">
        <Button
          className="w-full"
          variant="primary"
          onPress={onViewReports || (() => {})}
        >
          View Reports
        </Button>
        <Button
          className="w-full"
          variant="secondary"
          onPress={onManageProducts || (() => {})}
        >
          Manage Products
        </Button>
        <Button
          className="w-full"
          variant="tertiary"
          onPress={onSystemSettings || (() => {})}
        >
          System Settings
        </Button>
      </CardBody>
    </Card>
  )
}
