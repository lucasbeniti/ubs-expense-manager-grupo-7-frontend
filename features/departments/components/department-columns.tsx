'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatCurrencyToBRL } from '@/lib/utils/currency'
import { DeleteButton } from '@/components/shared/delete-button'
import { formatToBrazilianDatetime } from '@/lib/utils/date'
import { IDepartment } from '../types'
import { deleteDepartment } from '../api'
import { UpdateButton } from '@/components/shared/update-button'
import DepartmentUpsertDialog from './department-upsert-dialog'

export const departmentColumns: ColumnDef<IDepartment>[] = [
  {
    accessorKey: 'department_id',
    header: '#',
  },
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'monthly_budget',
    header: 'Orçamento mensal',
    accessorFn: (row) => formatCurrencyToBRL(row.monthly_budget),
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
      const department = row.original

      return (
        <div className="flex items-center gap-2">
          <UpdateButton entityName="departamento">
            {(open, setOpen) => (
              <DepartmentUpsertDialog
                open={open}
                onOpenChange={setOpen}
                defaultValues={{
                  id: department.department_id,
                  name: department.name,
                  monthly_budget: department.monthly_budget,
                }}
              />
            )}
          </UpdateButton>

          <DeleteButton
            id={department.department_id}
            onDelete={deleteDepartment}
            entityName="departamento"
          />
        </div>
      )
    },
  },
]
