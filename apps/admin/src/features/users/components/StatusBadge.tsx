import { Chip } from '@anypos/ui'

interface StatusBadgeProps {
  isActive: boolean
}

export const StatusBadge = ({ isActive }: StatusBadgeProps) => {
  return (
    <Chip color={isActive ? 'success' : 'default'} size="sm" variant="soft">
      {isActive ? 'Active' : 'Inactive'}
    </Chip>
  )
}
