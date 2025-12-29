import { Separator } from '@/components/ui/separator'
import { userService } from '@/lib/services/user.service'
import { departmentService } from '@/lib/services/department.service'
import CreateUserButton from './_components/create-user-button'
import UsersTable from './_components/users-table'

const UsersPage = async () => {
  const users = await userService.getAll()
  const departments = await departmentService.getAll()
  const managers = users.filter((user) => user.role === 'manager')

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Usuários</h1>

        <CreateUserButton departments={departments} managers={managers} />
      </div>

      <Separator />

      <UsersTable users={users} departments={departments} managers={managers} />
    </div>
  )
}

export default UsersPage
