import { getEmployeeExpenses } from '@/features/reports/api'
import { CategoryExpensesChart } from '@/features/reports/components/category-expenses-chart'
import { DepartmentBudgetComparativeChart } from '@/features/reports/components/department-budget-comparative-chart'
import { EmployeeExpensesChart } from '@/features/reports/components/employee-expenses-chart'
import { mapEmployeeExpensesToChart } from '@/features/reports/mapper'
import { getCategoryExpenses } from '@/features/reports/api'
import { mapCategoryExpensesToChart } from '@/features/reports/mapper'

const ReportsPage = async () => {
  const employeeExpenses = await getEmployeeExpenses()
  const formattedEmployeeExpenses = mapEmployeeExpensesToChart(employeeExpenses)

  // const categoryExpenses = await getCategoryExpenses()
  // const formattedCategoryExpenses = mapCategoryExpensesToChart(categoryExpenses)

  return (
    <div className="flex flex-col gap-6 p-6">
      <EmployeeExpensesChart expenses={formattedEmployeeExpenses} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* <CategoryExpensesChart expenses={formattedCategoryExpenses} />
        <DepartmentBudgetComparativeChart /> */}
      </div>
    </div>
  )
}

export default ReportsPage
