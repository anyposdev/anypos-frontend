import type { User } from '@/features/users'
import { Button, Card, CardBody, Input, Spinner, Table } from '@anypos/ui'
import { useUsers } from '@/features/users'
import { RoleBadge, StatusBadge } from './components'

export function UsersPage() {
  const { data: users, isLoading } = useUsers()

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Button variant="primary">+ Add User</Button>
      </div>

      <div className="mb-4 flex gap-4">
        <Input
          placeholder="Search users..."
          className="max-w-md"
        />
      </div>

      {isLoading
        ? (
            <div className="flex items-center justify-center py-12">
              <Spinner size="lg" />
              <span className="ml-2">Loading users...</span>
            </div>
          )
        : (
            <Card>
              <CardBody className="p-0">
                <Table>
                  <Table.Content aria-label="Users table">
                    <Table.Header>
                      <Table.Column>Name</Table.Column>
                      <Table.Column>Email</Table.Column>
                      <Table.Column>Role</Table.Column>
                      <Table.Column>Status</Table.Column>
                      <Table.Column>Actions</Table.Column>
                    </Table.Header>
                    <Table.Body items={users || []}>
                      {(user: User) => (
                        <Table.Row id={user.id}>
                          <Table.Cell>{user.name}</Table.Cell>
                          <Table.Cell className="text-gray-600">{user.email}</Table.Cell>
                          <Table.Cell>
                            <RoleBadge role={user.role} />
                          </Table.Cell>
                          <Table.Cell>
                            <StatusBadge isActive={user.isActive} />
                          </Table.Cell>
                          <Table.Cell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="secondary">Edit</Button>
                              <Button size="sm" variant="danger">
                                Delete
                              </Button>
                            </div>
                          </Table.Cell>
                        </Table.Row>
                      )}
                    </Table.Body>
                  </Table.Content>
                </Table>
              </CardBody>
            </Card>
          )}
    </div>
  )
}
