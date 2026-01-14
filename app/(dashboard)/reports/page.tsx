import { getDepartmentBudgetComparative, getEmployeeExpenses } from '@/features/reports/api'
import { CategoryExpensesChart } from '@/features/reports/components/category-expenses-chart'
import { DepartmentBudgetComparativeChart } from '@/features/reports/components/department-budget-comparative-chart'
import { EmployeeExpensesChart } from '@/features/reports/components/employee-expenses-chart'
import {
  mapDepartmentBudgetComparativeToChart,
  mapEmployeeExpensesToChart,
} from '@/features/reports/mapper'
import { getCategoryExpenses } from '@/features/reports/api'
import { mapCategoryExpensesToChart } from '@/features/reports/mapper'
import { apiServer } from '@/lib/http/api-server'

const ReportsPage = async () => {
  const fetcher = await apiServer()

  const [employeeExpenses, categoryExpenses, departmentBudgetComparative] = await Promise.all([
    getEmployeeExpenses(undefined, undefined, fetcher),
    getCategoryExpenses(fetcher),
    getDepartmentBudgetComparative(fetcher),
  ])

  const formattedEmployeeExpenses = mapEmployeeExpensesToChart(employeeExpenses)
  const formattedCategoryExpenses = mapCategoryExpensesToChart(categoryExpenses)
  const formattedDepartmentBudgetComparative = mapDepartmentBudgetComparativeToChart(
    departmentBudgetComparative
  )

  return (
    <div className="flex flex-col gap-6 p-6">
      <EmployeeExpensesChart expenses={formattedEmployeeExpenses} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CategoryExpensesChart expenses={formattedCategoryExpenses} />
        <DepartmentBudgetComparativeChart comparative={formattedDepartmentBudgetComparative} />
      </div>
    </div>
  )
}

export default ReportsPage
