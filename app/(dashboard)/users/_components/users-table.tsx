'use client'

import { DataTable } from '@/components/data-table'
import { columns } from './columns'
import { IUser } from '@/types/user'

export function UsersTable({ data }: { data: IUser[] }) {
  return <DataTable columns={columns} data={data} />
}
