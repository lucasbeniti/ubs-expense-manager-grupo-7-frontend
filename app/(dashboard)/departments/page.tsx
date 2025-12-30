import { cookies } from 'next/headers'
import { Separator } from '@/components/ui/separator'
import { departmentService } from '@/lib/services/department.service'
import { departmentColumns } from './_components/department-columns'
import { DataTable } from '@/components/ui/data-table'
import CreateDepartmentButton from './_components/create-department-button'

const DepartmentsPage = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  const departments = await departmentService.getAll(token)

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Departamentos</h1>

        <CreateDepartmentButton />
      </div>

      <Separator />

      <DataTable columns={departmentColumns} data={departments} />
    </div>
  )
}

export default DepartmentsPage
