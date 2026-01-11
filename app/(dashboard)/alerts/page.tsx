import { DataTable } from '@/components/ui/data-table'
import { getAlerts } from '@/features/alerts/api'
import { alertColumns } from '@/features/alerts/components/alert-columns'

const AlertsPage = async () => {
  const alerts = await getAlerts()

  return (
    <div className="p-6">
      <DataTable columns={alertColumns} data={alerts} />
    </div>
  )
}

export default AlertsPage
