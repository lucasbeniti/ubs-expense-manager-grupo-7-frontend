import { getCategories } from '@/features/categories/api'
import { getCurrencies } from '@/features/currencies/api'
import { getEmployees } from '@/features/employees/api'
import { getExpenses } from '@/features/expenses/api'
import ExpensesTable from '@/features/expenses/components/expenses-table'

const ExpensesPage = async () => {
  const expenses = await getExpenses()
  const currencies = await getCurrencies()
  const employees = await getEmployees()
  const categories = await getCategories()

  return (
    <>
      <div className="p-6">
        <ExpensesTable
          expenses={expenses}
          employees={employees}
          categories={categories}
          currencies={currencies}
        />
      </div>
    </>
  )
}

export default ExpensesPage
