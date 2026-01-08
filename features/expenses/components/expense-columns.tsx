'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatCurrencyToBRL } from '@/lib/utils/currency'
import { DeleteButton } from '@/components/shared/delete-button'
import { formatToBrazilianDate } from '@/lib/utils/date'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { IExpense } from '../types'
import { deleteExpense } from '../api'
import { EXPENSE_STATUS_STYLES } from '../constants'
import UpdateExpenseButton from './update-expense-button'

/* ======================================================
   COLUNAS DA TABELA
====================================================== */
export const expenseColumns: ColumnDef<IExpense>[] = [
  {
    id: 'select',
    header: () => null, // sem checkbox no cabeçalho
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) =>
            row.toggleSelected(!!value)
          }
          aria-label="Selecionar linha"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  /* ===== NOME ===== */
  {
    accessorKey: 'employee.name',
    header: 'Nome',
    cell: ({ row }) => row.original.employee?.name || '-',
  },

  /* ===== DEPARTAMENTO ===== */
  {
    accessorKey: 'department.name',
    header: 'Departamento',
    cell: ({ row }) => row.original.department?.name || '-',
  },

  /* ===== CATEGORIA ===== */
  {
    accessorKey: 'category.name',
    header: 'Categoria',
    cell: ({ row }) => row.original.category?.name || '-',
  },

  /* ===== VALOR ===== */
  {
    accessorKey: 'amount',
    header: 'Valor',
    cell: ({ row }) => formatCurrencyToBRL(row.original.amount),
  },

  /* ===== DATA ===== */
  {
    accessorKey: 'date',
    header: 'Data',
    cell: ({ row }) =>
      row.original.date
        ? formatToBrazilianDate(row.original.date)
        : '-',
  },

  /* ===== STATUS ===== */
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status
      const statusConfig = EXPENSE_STATUS_STYLES[status]

      if (!statusConfig) return '-'

      return (
        <Badge variant="outline" className={statusConfig.className}>
          {statusConfig.label}
        </Badge>
      )
    },
  },

  /* ===== AÇÕES ===== */
  {
    id: 'actions',
    header: 'Ações',
    cell: ({ row }) => {
      const expense = row.original

      return (
        <div className="flex items-center gap-2">
          <UpdateExpenseButton expense={expense} />
          <DeleteButton
            id={expense.id}
            onDelete={deleteExpense}
            entityName="despesa"
          />
        </div>
      )
    },
  },
]
