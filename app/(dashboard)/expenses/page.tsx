import { DataTable } from '@/components/ui/data-table'
import CreateExpenseButton from '@/features/expenses/components/create-expense-button'
import { expenseColumns } from '@/features/expenses/components/expense-columns'
import { getExpenses } from '@/features/expenses/api'
import { getCategories } from '@/features/categories/api'
import { getEmployees } from '@/features/employees/api'
import PageHeader from '@/components/shared/page-header'

const ExpensesPage = async () => {
  const expenses = await getExpenses()
  const categories = await getCategories()
  const employees = await getEmployees()

  return (
    <>
      <PageHeader>
        <CreateExpenseButton categories={categories} employees={employees} />
      </PageHeader>

      <div className="p-6">
        <DataTable columns={expenseColumns} data={expenses} />
      </div>
    </>
  )
}

export default ExpensesPage
