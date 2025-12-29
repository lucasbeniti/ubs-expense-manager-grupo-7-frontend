import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'
import { userColumns } from './_components/user-columns'
import { userService } from '@/lib/services/user.service'

const UsersPage = async () => {
  const users = await userService.getAll()

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

      <DataTable columns={userColumns} data={users} />
    </div>
  )
}

export default UsersPage
