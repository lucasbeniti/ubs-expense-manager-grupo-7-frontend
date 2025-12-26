'use client'

import { DataTable } from '@/components/data-table'
import { columns } from './columns'
import { IDepartment } from '@/types/department'

interface Props {
  data: IDepartment[]
}

export function DepartmentsTable({ data }: Props) {
  return <DataTable columns={columns} data={data} />
}
