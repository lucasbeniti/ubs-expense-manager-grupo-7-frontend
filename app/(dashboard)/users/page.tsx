import CreateUserButton from '../../../features/users/components/create-user-button'
import UsersTable from '../../../features/users/components/users-table'
import { getDepartments } from '@/features/departments/api'
import { getUsers } from '@/features/users/api'

const UsersPage = async () => {
  const users = await getUsers()
  const departments = await getDepartments()
  const managers = users.filter((user) => user.role === 'manager')

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Usuários</h1>

        <CreateUserButton departments={departments} managers={managers} />
      </div>

      <UsersTable users={users} departments={departments} managers={managers} />
    </div>
  )
}

export default UsersPage
