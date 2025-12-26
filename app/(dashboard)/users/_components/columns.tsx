'use client'

import { ColumnDef } from '@tanstack/react-table'
import { IUser } from '@/types/user'
import { Button } from '@/components/ui/button'
import { PencilIcon, Trash2Icon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'position',
    header: 'Cargo',
    cell: ({ row }) => {
      const position = row.getValue('position') as string

      const labels: Record<string, string> = {
        employee: 'Funcionário',
        manager: 'Gestor',
        finance: 'Financeiro',
      }

      return labels[position]
    },
  },
  {
    accessorKey: 'department.name',
    header: 'Departamento',
  },
  {
    accessorKey: 'manager',
    header: 'Gestor',
    cell: ({ row }) => {
      const manager = row.original.manager
      return manager ? manager.name : 'N/A'
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

            <TooltipContent>Editar usuário</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Trash2Icon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>

            <TooltipContent>Deletar usuário</TooltipContent>
          </Tooltip>
        </div>
      )
    },
  },
]
