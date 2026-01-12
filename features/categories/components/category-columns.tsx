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
    accessorKey: 'id',
    header: '#',
  },
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'dailyLimit',
    header: 'Limite diário',
    accessorFn: (row) => formatCurrencyToBRL(row.dailyLimit),
  },
  {
    accessorKey: 'monthlyLimit',
    header: 'Limite mensal',
    accessorFn: (row) => formatCurrencyToBRL(row.monthlyLimit),
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
      const category = row.original

      return (
        <div className="flex items-center gap-2">
          <UpdateButton entityName="categoria">
            {(open, setOpen) => (
              <CategoryUpsertDialog
                open={open}
                onOpenChange={setOpen}
                defaultValues={{
                  id: category.id,
                  name: category.name,
                  dailyLimit: category.dailyLimit,
                  monthlyLimit: category.monthlyLimit,
                }}
              />
            )}
          </UpdateButton>

          <DeleteButton id={category.id} onDelete={deleteCategory} entityName="categoria" />
        </div>
      )
    },
  },
]
