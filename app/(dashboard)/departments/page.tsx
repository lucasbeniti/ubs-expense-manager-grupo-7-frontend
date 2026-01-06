import { departmentColumns } from '../../../features/departments/components/department-columns'
import { DataTable } from '@/components/ui/data-table'
import CreateDepartmentButton from '../../../features/departments/components/create-department-button'
import { getDepartments } from '@/features/departments/api'

const DepartmentsPage = async () => {
  const departments = await getDepartments()

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Departamentos</h1>

        <CreateDepartmentButton />
      </div>

      <DataTable columns={departmentColumns} data={departments} />
    </div>
  )
}

export default DepartmentsPage
