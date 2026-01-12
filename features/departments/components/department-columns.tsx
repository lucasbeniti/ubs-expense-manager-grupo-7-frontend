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
    accessorKey: 'id',
    header: '#',
  },
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'monthlyBudget',
    header: 'Orçamento mensal',
    accessorFn: (row) => formatCurrencyToBRL(row.monthlyBudget),
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
      const department = row.original

      return (
        <div className="flex items-center gap-2">
          <UpdateButton entityName="departamento">
            {(open, setOpen) => (
              <DepartmentUpsertDialog
                open={open}
                onOpenChange={setOpen}
                defaultValues={{
                  id: department.id,
                  name: department.name,
                  monthlyBudget: department.monthlyBudget,
                }}
              />
            )}
          </UpdateButton>

          <DeleteButton id={department.id} onDelete={deleteDepartment} entityName="departamento" />
        </div>
      )
    },
  },
]
