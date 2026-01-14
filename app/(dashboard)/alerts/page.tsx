import { DataTable } from '@/components/ui/data-table'
import { getAlerts } from '@/features/alerts/api'
import { alertColumns } from '@/features/alerts/components/alert-columns'
import { apiServer } from '@/lib/http/api-server'

const AlertsPage = async () => {
  const fetcher = await apiServer()
  const alerts = await getAlerts(fetcher)

  return (
    <div className="p-6">
      <DataTable columns={alertColumns} data={alerts} />
    </div>
  )
}

export default AlertsPage
