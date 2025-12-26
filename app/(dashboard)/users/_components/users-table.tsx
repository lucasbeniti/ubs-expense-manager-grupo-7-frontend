'use client'

import { DataTable } from '@/components/data-table'
import { columns } from './columns'
import { IUser } from '@/types/user'

type Props = {
  data: IUser[]
}

export function UsersTable({ data }: Props) {
  return <DataTable columns={columns} data={data} />
}
