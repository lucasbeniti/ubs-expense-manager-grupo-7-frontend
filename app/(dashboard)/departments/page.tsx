import { departmentColumns } from '../../../features/departments/components/department-columns'
import { DataTable } from '@/components/ui/data-table'
import CreateDepartmentButton from '../../../features/departments/components/create-department-button'
import { getDepartments } from '@/features/departments/api'

const DepartmentsPage = async () => {
  const departments = await getDepartments()

  return (
    <>
      <div className="p-6">
        <DataTable
          columns={departmentColumns}
          data={departments}
          createButton={<CreateDepartmentButton />}
        />
      </div>
    </>
  )
}

export default DepartmentsPage
