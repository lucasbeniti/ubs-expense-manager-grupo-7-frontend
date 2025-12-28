'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { PencilIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { IDepartment } from '@/types/department'
import { formatCurrencyToBRL } from '@/utils/currency'
import DeleteDepartmentButton from './delete-department-button'

export const columns: ColumnDef<IDepartment>[] = [
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
      return (
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <PencilIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>

            <TooltipContent>Editar departamento</TooltipContent>
          </Tooltip>

          <DeleteDepartmentButton department={row.original} />
        </div>
      )
    },
  },
]
