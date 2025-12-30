'use client'

import { ColumnDef } from '@tanstack/react-table'
import { DeleteButton } from '@/components/shared/delete-button'
import { userService } from '@/lib/services/user.service'
import { USER_ROLE_LABELS } from '@/constants/user'
import UpdateUserButton from './update-user-button'
import { IDepartment } from '@/lib/types/department'
import { IUser } from '@/lib/types/user'
import { formatToBrazilianDatetime } from '@/lib/utils/date'

export const userColumns = (departments: IDepartment[], managers: IUser[]): ColumnDef<IUser>[] => [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Cargo',
    cell: ({ row }) => USER_ROLE_LABELS[row.getValue('role') as string],
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
      const user = row.original

      return (
        <>
          <UpdateUserButton user={user} departments={departments} managers={managers} />

          <DeleteButton id={user.id} onDelete={userService.delete} entityName="usuário" />
        </>
      )
    },
  },
]
