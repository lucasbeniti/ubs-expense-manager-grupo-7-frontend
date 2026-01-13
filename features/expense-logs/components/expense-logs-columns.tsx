'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatToBrazilianDatetime } from '@/lib/utils/date'
import { IExpenseLog } from '../types'
import { EXPENSE_LOG_ACTION_STYLES } from '../constants'
import { Badge } from '@/components/ui/badge'

export const expenseLogColumns: ColumnDef<IExpenseLog>[] = [
  {
    accessorKey: 'id',
    header: '#',
  },
  {
    accessorKey: 'action',
    header: 'Ação',
    cell: ({ row }) => {
      const action = row.original.action
      const config = EXPENSE_LOG_ACTION_STYLES[action]

      if (!config) {
        return null
      }

      return (
        <Badge variant="outline" className={config.className}>
          {config.label}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'comments',
    header: 'Comentário',
  },
  {
    accessorKey: 'expenseDescription',
    header: 'Despesa',
  },
  {
    accessorKey: 'employeeName',
    header: 'Funcionário',
  },
  {
    accessorKey: 'createdAt',
    header: 'Data de criação',
    accessorFn: (row) => formatToBrazilianDatetime(row.createdAt),
  },
]
