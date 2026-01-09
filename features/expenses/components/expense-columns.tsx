'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatToBrazilianDate, formatToBrazilianDatetime } from '@/lib/utils/date'
import { formatCurrencyToBRL } from '@/lib/utils/currency'
import { IExpense } from '../types'
import { ICurrency } from '@/features/currencies/types'
import { ICategory } from '@/features/categories/types'
import { IEmployee } from '@/features/employees/types'
import { UpdateButton } from '@/components/shared/update-button'
import ExpenseUpsertDialog from './expense-upsert-dialog'
import { DeleteButton } from '@/components/shared/delete-button'
import { deleteExpense } from '../api'
import { Badge } from '@/components/ui/badge'
import { EXPENSE_STATUS_STYLES } from '../constants'

export const expenseColumns = (
  currencies: ICurrency[],
  categories: ICategory[],
  employees: IEmployee[]
): ColumnDef<IExpense>[] => [
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
      const statusConfig = EXPENSE_STATUS_STYLES[status]

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

      return (
        <>
          <UpdateButton entityName="despesa">
            {(open, setOpen) => (
              <ExpenseUpsertDialog
                open={open}
                onOpenChange={setOpen}
                currencies={currencies}
                categories={categories}
                employees={employees}
                defaultValues={{
                  id: expense.expense_id,
                  description: expense.description,
                  date: expense.date,
                  amount: expense.amount,
                  category_id: expense.category_id,
                  currency_id: expense.currency_id,
                  employee_id: expense.employee_id,
                  receipt_url: expense.receipt_url,
                }}
              />
            )}
          </UpdateButton>

          <DeleteButton id={expense.expense_id} onDelete={deleteExpense} entityName="despesa" />
        </>
      )
    },
  },
]
