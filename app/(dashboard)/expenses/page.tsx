import { getCategories } from '@/features/categories/api'
import { getCurrencies } from '@/features/currencies/api'
import { getEmployees } from '@/features/employees/api'
import { getExpenses } from '@/features/expenses/api'
import ExpensesTable from '@/features/expenses/components/expenses-table'
import { apiServer } from '@/lib/http/api-server'

const ExpensesPage = async () => {
  const fetcher = await apiServer()
  const [expenses, currencies, employees, categories] = await Promise.all([
    getExpenses(fetcher),
    getCurrencies(fetcher),
    getEmployees(fetcher),
    getCategories(fetcher),
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
