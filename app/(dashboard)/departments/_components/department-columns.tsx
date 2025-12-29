'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { PencilIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { IDepartment } from '@/lib/types/department'
import { formatCurrencyToBRL } from '@/lib/utils/currency'
import { DeleteButton } from '@/components/shared/delete-button'
import { departmentService } from '@/lib/services/department.service'

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
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <PencilIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>

            <TooltipContent>Editar departamento</TooltipContent>
          </Tooltip>

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
