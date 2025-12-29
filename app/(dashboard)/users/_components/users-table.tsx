'use client'

import { DataTable } from '@/components/ui/data-table'
import { userColumns } from './user-columns'
import { IDepartment } from '@/lib/types/department'
import { IUser } from '@/lib/types/user'

interface UsersTableProps {
  users: IUser[]
  departments: IDepartment[]
  managers: IUser[]
}

export default function UsersTable({ users, departments, managers }: UsersTableProps) {
  return <DataTable data={users} columns={userColumns(departments, managers)} />
}
