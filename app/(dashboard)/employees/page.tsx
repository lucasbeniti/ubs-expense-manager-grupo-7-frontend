import { getDepartments } from '@/features/departments/api'
import { getEmployees } from '@/features/employees/api'
import EmployeesTable from '@/features/employees/components/employees-table'
import { apiServer } from '@/lib/http/api-server'

const EmployeesPage = async () => {
  const fetcher = await apiServer()

  const [employees, departments] = await Promise.all([
    getEmployees(fetcher),
    getDepartments(fetcher),
  ])
  const managers = employees.filter((employee) => employee.role === 'MANAGER')

  return (
    <div className="p-6">
      <EmployeesTable employees={employees} departments={departments} managers={managers} />
    </div>
  )
}

export default EmployeesPage
