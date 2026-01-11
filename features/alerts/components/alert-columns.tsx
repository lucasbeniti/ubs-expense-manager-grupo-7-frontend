'use client'

import { ColumnDef } from '@tanstack/react-table'
import { IAlert } from '../types'
import { formatToBrazilianDatetime } from '@/lib/utils/date'
import { Badge } from '@/components/ui/badge'
import { ALERT_STATUS_STYLES, ALERT_TYPE_STYLES } from '../constants'

export const alertColumns: ColumnDef<IAlert>[] = [
  {
    accessorKey: 'alert_id',
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
      const statusConfig = ALERT_STATUS_STYLES[status]

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
      const typeConfig = ALERT_TYPE_STYLES[type]

      return (
        <Badge variant="outline" className={typeConfig.className}>
          {typeConfig.label}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'expense_description',
    header: 'Despesa',
  },
  {
    accessorKey: 'created_at',
    header: 'Data de criação',
    accessorFn: (row) => formatToBrazilianDatetime(row.created_at),
  },
]
