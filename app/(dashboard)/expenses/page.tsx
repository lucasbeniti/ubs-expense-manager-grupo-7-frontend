import { getCategories } from '@/features/categories/api'
import { getCurrencies } from '@/features/currencies/api'
import { getEmployees } from '@/features/employees/api'
import { getExpenses } from '@/features/expenses/api'
import ExpensesTable from '@/features/expenses/components/expenses-table'

const ExpensesPage = async () => {
  const [expenses, currencies, employees, categories] = await Promise.all([
    getExpenses(),
    getCurrencies(),
    getEmployees(),
    getCategories(),
  ])

  return (
    <div className="p-6">
      <ExpensesTable
        expenses={expenses}
        employees={employees}
        categories={categories}
        currencies={currencies}
      />
    </div>
  )
}

export default ExpensesPage
