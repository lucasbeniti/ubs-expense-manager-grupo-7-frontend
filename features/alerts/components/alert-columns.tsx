'use client'

import { ColumnDef } from '@tanstack/react-table'
import { EAlertStatus, IAlert } from '../types'
import { formatToBrazilianDatetime } from '@/lib/utils/date'
import { Badge } from '@/components/ui/badge'
import { ALERT_STATUS_STYLES, ALERT_TYPE_STYLES } from '../constants'
import AlertResolveButton from './alert-resolve-button'

export const alertColumns: ColumnDef<IAlert>[] = [
  {
    accessorKey: 'id',
    header: '#',
  },
  {
    accessorKey: 'message',
    header: 'Mensagem',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      const statusConfig = ALERT_STATUS_STYLES[status.toUpperCase()]

      return (
        <Badge variant="outline" className={statusConfig.className}>
          {statusConfig.label}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row }) => {
      const type = row.getValue('type') as string
      const typeConfig = ALERT_TYPE_STYLES[type.toUpperCase()]

      return (
        <Badge variant="outline" className={typeConfig.className}>
          {typeConfig.label}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'expenseDescription',
    header: 'Despesa',
  },
  {
    accessorKey: 'createdAt',
    header: 'Data de criação',
    accessorFn: (row) => formatToBrazilianDatetime(row.createdAt),
  },
  {
    id: 'actions',
    header: 'Ações',
    enableGlobalFilter: false,
    cell: ({ row }) => {
      const alert = row.original

      return alert.status === EAlertStatus.RESOLVED ? (
        'Sem ações disponível'
      ) : (
        <AlertResolveButton id={alert.id} />
      )
    },
  },
]
