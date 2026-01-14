'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatToBrazilianDate, formatToBrazilianDatetime } from '@/lib/utils/date'
import { formatCurrencyToBRL } from '@/lib/utils/currency'
import { EExpenseStatus, IExpense } from '../types'
import { UpdateButton } from '@/components/shared/update-button'
import { Badge } from '@/components/ui/badge'
import { EXPENSE_STATUS_STYLES } from '../constants'
import ExpenseUpdateStatusDialog from './expense-update-status-dialog'
import { useAuthContext } from '@/contexts/auth-context'

export const expenseColumns: ColumnDef<IExpense>[] = [
  {
    accessorKey: 'id',
    header: '#',
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
  },
  {
    accessorKey: 'date',
    header: 'Data',
    accessorFn: (row) => formatToBrazilianDate(row.createdAt),
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
    accessorFn: (row) => formatCurrencyToBRL(row.amount),
  },
  {
    accessorKey: 'employeeName',
    header: 'Funcionário',
  },
  {
    accessorKey: 'categoryName',
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
    accessorKey: 'needReview',
    header: 'Necessita Revisão',
    cell: ({ row }) => {
      const needReview = row.getValue('needReview') as boolean

      return (
        <Badge
          variant={needReview ? 'default' : 'secondary'}
          className={
            needReview
              ? 'border-red-200 bg-red-100 text-red-800'
              : 'border-green-200 bg-green-100 text-green-800'
          }
        >
          {needReview ? 'Sim' : 'Não'}
        </Badge>
      )
    },
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
      const expense = row.original
      const { user } = useAuthContext()

      if (user?.role === 'EMPLOYEE') {
        return 'Sem ações disponíveis'
      }

      const isFinalized =
        expense.status === EExpenseStatus.REJECTED ||
        expense.status === EExpenseStatus.FINANCE_APPROVED

      if (isFinalized) {
        return 'Sem ações disponíveis'
      }

      const isManagerAndAlreadyApproved =
        user?.role === 'MANAGER' && expense.status === EExpenseStatus.MANAGER_APPROVED

      if (isManagerAndAlreadyApproved) {
        return 'Sem ações disponíveis'
      }

      return (
        <UpdateButton entityName="despesa">
          {(open, setOpen) => (
            <ExpenseUpdateStatusDialog expense={expense} open={open} onOpenChange={setOpen} />
          )}
        </UpdateButton>
      )
    },
  },
]
