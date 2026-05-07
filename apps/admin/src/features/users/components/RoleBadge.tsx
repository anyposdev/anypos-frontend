import { Chip } from '@anypos/ui'

interface RoleBadgeProps {
  role: 'admin' | 'manager' | 'cashier'
}

const roleColors = {
  admin: 'danger' as const,
  manager: 'warning' as const,
  cashier: 'success' as const,
}

export function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <Chip color={roleColors[role]} size="sm" variant="soft">
      {role}
    </Chip>
  )
}
