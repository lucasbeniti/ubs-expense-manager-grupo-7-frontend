'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatCurrencyToBRL } from '@/lib/utils/currency'
import { DeleteButton } from '@/components/shared/delete-button'
import { formatToBrazilianDatetime } from '@/lib/utils/date'
import { ICategory } from '../types'
import { deleteCategory } from '../api'
import { UpdateButton } from '@/components/shared/update-button'
import CategoryUpsertDialog from './category-upsert-dialog'

export const categoryColumns: ColumnDef<ICategory>[] = [
  {
    accessorKey: 'category_id',
    header: '#',
  },
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'daily_limit',
    header: 'Limite diário',
    accessorFn: (row) => formatCurrencyToBRL(row.daily_limit),
  },
  {
    accessorKey: 'monthly_limit',
    header: 'Limite mensal',
    accessorFn: (row) => formatCurrencyToBRL(row.monthly_limit),
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
      const category = row.original

      return (
        <div className="flex items-center gap-2">
          <UpdateButton entityName="categoria">
            {(open, setOpen) => (
              <CategoryUpsertDialog
                open={open}
                onOpenChange={setOpen}
                defaultValues={{
                  id: category.category_id,
                  name: category.name,
                  daily_limit: category.daily_limit,
                  monthly_limit: category.monthly_limit,
                }}
              />
            )}
          </UpdateButton>

          <DeleteButton
            id={category.category_id}
            onDelete={deleteCategory}
            entityName="categoria"
          />
        </div>
      )
    },
  },
]
