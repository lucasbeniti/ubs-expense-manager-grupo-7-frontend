'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatCurrencyToBRL } from '@/lib/utils/currency'
import { DeleteButton } from '@/components/shared/delete-button'
import { departmentService } from '@/lib/services/department.service'
import UpdateDepartmentButton from './update-department-button'
import { IDepartment } from '@/lib/types/department'

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
