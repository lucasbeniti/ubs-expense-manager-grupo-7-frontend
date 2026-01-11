import { getDepartments } from '@/features/departments/api'
import { getEmployees } from '@/features/employees/api'
import EmployeesTable from '@/features/employees/components/employees-table'

const EmployeesPage = async () => {
  const [employees, departments] = await Promise.all([getEmployees(), getDepartments()])
  const managers = employees.filter((employee) => employee.role === 'MANAGER')

  return (
    <div className="p-6">
      <EmployeesTable employees={employees} departments={departments} managers={managers} />
    </div>
  )
}

export default EmployeesPage
