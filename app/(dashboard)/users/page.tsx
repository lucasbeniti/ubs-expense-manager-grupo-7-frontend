import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { UsersTable } from './_components/users-table'
import { Separator } from '@/components/ui/separator'
import { getUsers } from './_services/user.service'

const UsersPage = async () => {
  const users = await getUsers()

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Usuários</h1>

        <Button className="rounded-full">
          Adicionar usuário
          <PlusIcon />
        </Button>
      </div>

      <Separator />

      <UsersTable data={users} />
    </div>
  )
}

export default UsersPage
