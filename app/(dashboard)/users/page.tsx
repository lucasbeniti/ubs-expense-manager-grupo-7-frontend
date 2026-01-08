import CreateUserButton from '../../../features/users/components/create-user-button'
import UsersTable from '../../../features/users/components/users-table'
import { getDepartments } from '@/features/departments/api'
import { getUsers } from '@/features/users/api'
import PageHeader from '@/components/shared/page-header'

const UsersPage = async () => {
  const users = await getUsers()
  const departments = await getDepartments()
  const managers = users.filter((user) => user.role === 'manager')

  return (
    <>
      <PageHeader>
        <CreateUserButton departments={departments} managers={managers} />
      </PageHeader>

      <div className="p-6">
        <UsersTable users={users} departments={departments} managers={managers} />
      </div>
    </>
  )
}

export default UsersPage
