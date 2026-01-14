import { DataTable } from '@/components/ui/data-table'
import { getExpenseLogs } from '@/features/expense-logs/api'
import { expenseLogColumns } from '@/features/expense-logs/components/expense-logs-columns'
import { apiServer } from '@/lib/http/api-server'

const ExpenseLogsPage = async () => {
  const fetcher = await apiServer()
  const logs = await getExpenseLogs(fetcher)

  return (
    <div className="p-6">
      <DataTable columns={expenseLogColumns} data={logs} />
    </div>
  )
}

export default ExpenseLogsPage
