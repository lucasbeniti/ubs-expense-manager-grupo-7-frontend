import { getDepartments } from '@/features/departments/api'
import { getEmployees } from '@/features/employees/api'
import EmployeesTable from '@/features/employees/components/employees-table'

const EmployeesPage = async () => {
  const employees = await getEmployees()
  const departments = await getDepartments()
  const managers = employees.filter((employee) => employee.role === 'manager')

  return (
    <>
      <div className="p-6">
        <EmployeesTable employees={employees} departments={departments} managers={managers} />
      </div>
    </>
  )
}

export default EmployeesPage
