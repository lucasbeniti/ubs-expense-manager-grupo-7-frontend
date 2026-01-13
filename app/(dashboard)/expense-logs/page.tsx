import { DataTable } from '@/components/ui/data-table'
import { getExpenseLogs } from '@/features/expense-logs/api'
import { expenseLogColumns } from '@/features/expense-logs/components/expense-logs-columns'

const ExpenseLogsPage = async () => {
  const alerts = await getExpenseLogs()

  return (
    <div className="p-6">
      <DataTable columns={expenseLogColumns} data={alerts} />
    </div>
  )
}

export default ExpenseLogsPage
