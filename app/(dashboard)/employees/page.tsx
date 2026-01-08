import { getDepartments } from '@/features/departments/api'
import PageHeader from '@/components/shared/page-header'
import { getEmployees } from '@/features/employees/api'
import EmployeesTable from '@/features/employees/components/employees-table'
import CreateEmployeeButton from '@/features/employees/components/create-employee-button'

const EmployeesPage = async () => {
  const employees = await getEmployees()
  const departments = await getDepartments()
  const managers = employees.filter((employee) => employee.role === 'manager')

  return (
    <>
      <PageHeader>
        <CreateEmployeeButton departments={departments} managers={managers} />
      </PageHeader>

      <div className="p-6">
        <EmployeesTable employees={employees} departments={departments} managers={managers} />
      </div>
    </>
  )
}

export default EmployeesPage
