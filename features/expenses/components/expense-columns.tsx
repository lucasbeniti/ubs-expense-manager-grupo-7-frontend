'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatToBrazilianDate, formatToBrazilianDatetime } from '@/lib/utils/date'
import { formatCurrencyToBRL } from '@/lib/utils/currency'
import { EExpenseStatus, IExpense } from '../types'
import { UpdateButton } from '@/components/shared/update-button'
import { Badge } from '@/components/ui/badge'
import { EXPENSE_STATUS_STYLES } from '../constants'
import ExpenseUpdateStatusDialog from './expense-update-status-dialog'

export const expenseColumns: ColumnDef<IExpense>[] = [
  {
    accessorKey: 'expense_id',
    header: '#',
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
  },
  {
    accessorKey: 'date',
    header: 'Data',
    accessorFn: (row) => formatToBrazilianDate(row.created_at),
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
    accessorFn: (row) => formatCurrencyToBRL(row.amount),
  },
  {
    accessorKey: 'employee_name',
    header: 'Funcionário',
  },
  {
    accessorKey: 'category_name',
    header: 'Categoria',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      const statusConfig = EXPENSE_STATUS_STYLES[status.toUpperCase()]

      return (
        <Badge variant="outline" className={statusConfig.className}>
          {statusConfig.label}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'created_at',
    header: 'Data de criação',
    accessorFn: (row) => formatToBrazilianDatetime(row.created_at),
  },
  {
    id: 'actions',
    header: 'Ações',
    enableGlobalFilter: false,
    cell: ({ row }) => {
      const expense = row.original

      return expense.status === EExpenseStatus.REJECTED ||
        expense.status === EExpenseStatus.FINANCE_APPROVED ? (
        'Sem ações disponíveis'
      ) : (
        <UpdateButton entityName="despesa">
          {(open, setOpen) => (
            <ExpenseUpdateStatusDialog expense={expense} open={open} onOpenChange={setOpen} />
          )}
        </UpdateButton>
      )
    },
  },
]
