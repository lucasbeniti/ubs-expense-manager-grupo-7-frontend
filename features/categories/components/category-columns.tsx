// 'use client'

// import { ColumnDef } from '@tanstack/react-table'
// import { formatCurrencyToBRL } from '@/lib/utils/currency'
// import { DeleteButton } from '@/components/shared/delete-button'
// import UpdateCategoryButton from './update-category-button'
// import { formatToBrazilianDatetime } from '@/lib/utils/date'
// import { ICategory } from '../types'
// import { deleteCategory } from '../api'

// export const categoryColumns: ColumnDef<ICategory>[] = [
//   {
//     accessorKey: 'name',
//     header: 'Nome',
//   },
//   {
//     accessorKey: 'daily_limit',
//     header: 'Limite diário',
//     cell: ({ row }) => {
//       return formatCurrencyToBRL(row.original.daily_limit)
//     },
//   },
//   {
//     accessorKey: 'monthly_limit',
//     header: 'Limite mensal',
//     cell: ({ row }) => {
//       return formatCurrencyToBRL(row.original.monthly_limit)
//     },
//   },
//   {
//     accessorKey: 'created_at',
//     header: 'Data de criação',
//     cell: ({ row }) => {
//       return formatToBrazilianDatetime(row.original.created_at)
//     },
//   },
//   {
//     id: 'actions',
//     header: 'Ações',
//     cell: ({ row }) => {
//       const category = row.original

//       return (
//         <div className="flex items-center gap-2">
//           <UpdateCategoryButton category={category} />

//           <DeleteButton id={category.id} onDelete={deleteCategory} entityName="categoria" />
//         </div>
//       )
//     },
//   },
// ]

'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatCurrencyToBRL } from '@/lib/utils/currency'
import { DeleteButton } from '@/components/shared/delete-button'
import UpdateCategoryButton from './update-category-button'
import { formatToBrazilianDatetime } from '@/lib/utils/date'
import { ICategory } from '../types'
import { deleteCategory } from '../api'

export const categoryColumns: ColumnDef<ICategory>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
  },
  {
    accessorKey: 'daily_limit',
    header: 'Limite diário',
    cell: ({ row }) => {
      const limit = row.original.daily_limit
      return limit ? formatCurrencyToBRL(limit) : '-'
    },
  },
  {
    accessorKey: 'monthly_limit',
    header: 'Limite mensal',
    cell: ({ row }) => {
      const limit = row.original.monthly_limit
      return limit ? formatCurrencyToBRL(limit) : '-'
    },
  },
  {
    accessorKey: 'created_at',
    header: 'Data de criação',
    cell: ({ row }) => {
      const date = row.original.created_at
      return date ? formatToBrazilianDatetime(date) : '-'
    },
  },
  {
    id: 'actions',
    header: 'Ações',
    cell: ({ row }) => {
      const category = row.original

      return (
        <div className="flex items-center gap-2">
          <UpdateCategoryButton category={category} />

          <DeleteButton id={category.id} onDelete={deleteCategory} entityName="categoria" />
        </div>
      )
    },
  },
]