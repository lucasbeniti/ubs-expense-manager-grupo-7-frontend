'use client'

import { ColumnDef } from '@tanstack/react-table'
import { DeleteButton } from '@/components/shared/delete-button'
import UpdateUserButton from './update-user-button'
import { formatToBrazilianDatetime } from '@/lib/utils/date'
import { IDepartment } from '@/features/departments/types'
import { IUser } from '../types'
import { deleteUser } from '../api'
import { USER_ROLE_STYLES } from '../constants'
import { Badge } from '@/components/ui/badge'

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
    cell: ({ row }) => {
      const role = row.getValue('role') as string
      const roleConfig = USER_ROLE_STYLES[role]

      return (
        <Badge variant="outline" className={roleConfig.className}>
          {roleConfig.label}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'department.name',
    header: 'Departamento',
  },
  {
    accessorKey: 'manager.name',
    header: 'Gestor',
    cell: ({ row }) => {
      const managerName = row.original.manager?.name

      return managerName ? managerName : 'N/A'
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
      const user = row.original

      return (
        <>
          <UpdateUserButton user={user} departments={departments} managers={managers} />

          <DeleteButton id={user.id} onDelete={deleteUser} entityName="usuário" />
        </>
      )
    },
  },
]
