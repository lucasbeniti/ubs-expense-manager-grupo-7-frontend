import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { departmentService } from '@/lib/services/department.service'
import { departmentColumns } from './_components/department-columns'
import { DataTable } from '@/components/ui/data-table'

const DepartmentsPage = async () => {
  const departments = await departmentService.getAll()

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

      <DataTable columns={departmentColumns} data={departments} />
    </div>
  )
}

export default DepartmentsPage
