import { departmentColumns } from '../../../features/departments/components/department-columns'
import { DataTable } from '@/components/ui/data-table'
import CreateDepartmentButton from '../../../features/departments/components/create-department-button'
import { getDepartments } from '@/features/departments/api'
import { apiServer } from '@/lib/http/api-server'

const DepartmentsPage = async () => {
  const fetcher = await apiServer()
  const departments = await getDepartments(fetcher)

  return (
    <div className="p-6">
      <DataTable
        columns={departmentColumns}
        data={departments}
        actions={<CreateDepartmentButton />}
      />
    </div>
  )
}

export default DepartmentsPage
