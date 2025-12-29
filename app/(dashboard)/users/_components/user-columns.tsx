'use client'

import { ColumnDef } from '@tanstack/react-table'
import { IUser } from '@/lib/types/user'
import { Button } from '@/components/ui/button'
import { PencilIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { DeleteButton } from '@/components/shared/delete-button'
import { userService } from '@/lib/services/user.service'
import { USER_POSITION_LABELS } from '@/constants/user'

export const userColumns: ColumnDef<IUser>[] = [
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

      return USER_POSITION_LABELS[position]
    },
  },
  {
    accessorKey: 'department.name',
    header: 'Departamento',
  },
  {
    accessorKey: 'manager.name',
    header: 'Gestor',
  },
  {
    id: 'actions',
    header: 'Ações',
    cell: ({ row }) => {
      const user = row.original

      return (
        <>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <PencilIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>

            <TooltipContent>Editar departamento</TooltipContent>
          </Tooltip>

          <DeleteButton id={user.id} onDelete={userService.delete} entityName="usuário" />
        </>
      )
    },
  },
]
