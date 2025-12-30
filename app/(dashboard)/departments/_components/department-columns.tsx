'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatCurrencyToBRL } from '@/lib/utils/currency'
import { DeleteButton } from '@/components/shared/delete-button'
import { departmentService } from '@/lib/services/department.service'
import UpdateDepartmentButton from './update-department-button'
import { IDepartment } from '@/lib/types/department'
import { formatToBrazilianDatetime } from '@/lib/utils/date'

export const departmentColumns: ColumnDef<IDepartment>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'monthly_budget',
    header: 'Orçamento mensal',
    cell: ({ row }) => {
      return formatCurrencyToBRL(row.original.monthly_budget)
    },
  },
  {
    accessorKey: 'created_at',
    header: 'Data de criação',
    cell: ({ row }) => {
      return formatToBrazilianDatetime(row.original.created_at)
    },
  },
  {
    id: 'actions',
    header: 'Ações',
    cell: ({ row }) => {
      const department = row.original

      return (
        <div className="flex items-center gap-2">
          <UpdateDepartmentButton department={department} />

          <DeleteButton
            id={department.id}
            onDelete={departmentService.delete}
            entityName="departamento"
          />
        </div>
      )
    },
  },
]
