import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { getDepartments } from './_services/department.service'
import { DepartmentsTable } from './_components/departments-table'

const UsersPage = async () => {
  const users = await getDepartments()

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Departamentos</h1>

        <Button className="rounded-full">
          Adicionar departamento
          <PlusIcon />
        </Button>
      </div>

      <Separator />

      <DepartmentsTable data={users} />
    </div>
  )
}

export default UsersPage
