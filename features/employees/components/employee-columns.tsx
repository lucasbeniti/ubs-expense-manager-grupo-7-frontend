// 'use client'

// import { ColumnDef } from '@tanstack/react-table'
// import { DeleteButton } from '@/components/shared/delete-button'
// import { formatToBrazilianDatetime } from '@/lib/utils/date'
// import { IDepartment } from '@/features/departments/types'
// import { EMPLOYEE_ROLE_STYLES } from '../constants'
// import { Badge } from '@/components/ui/badge'
// import { IEmployee } from '../types'
// import UpdateEmployeeButton from './update-employee-button'
// import { deleteEmployee } from '../api'

// export const employeeColumns = (
//   departments: IDepartment[],
//   managers: IEmployee[]
// ): ColumnDef<IEmployee>[] => [
//   {
//     accessorKey: 'name',
//     header: 'Nome',
//   },
//   {
//     accessorKey: 'email',
//     header: 'Email',
//   },
//   {
//     accessorKey: 'role',
//     header: 'Cargo',
//     cell: ({ row }) => {
//       const role = row.getValue('role') as string
//       const roleConfig = EMPLOYEE_ROLE_STYLES[role]

//       return (
//         <Badge variant="outline" className={roleConfig.className}>
//           {roleConfig.label}
//         </Badge>
//       )
//     },
//   },
//   {
//     accessorKey: 'department.name',
//     header: 'Departamento',
//   },
//   {
//     accessorKey: 'manager.name',
//     header: 'Gestor',
//     cell: ({ row }) => {
//       const managerName = row.original.manager?.name

//       return managerName ? managerName : 'N/A'
//     },
//   },
//   {
//     accessorKey: 'created_at',
//     header: 'Data de criação',
//     cell: ({ row }) => {
//       return formatToBrazilianDatetime(row.original.created_at)
//     },
//   },
//   {
//     id: 'actions',
//     header: 'Ações',
//     cell: ({ row }) => {
//       const employee = row.original

//       return (
//         <>
//           <UpdateEmployeeButton employee={employee} departments={departments} managers={managers} />

//           <DeleteButton id={employee.id} onDelete={deleteEmployee} entityName="usuário" />
//         </>
//       )
//     },
//   },
// ]

'use client'

import { ColumnDef } from '@tanstack/react-table'
import { DeleteButton } from '@/components/shared/delete-button'
import { formatToBrazilianDatetime } from '@/lib/utils/date'
import { IDepartment } from '@/features/departments/types'
import { EMPLOYEE_ROLE_STYLES } from '../constants'
import { Badge } from '@/components/ui/badge'
import { IEmployee } from '../types'
import UpdateEmployeeButton from './update-employee-button'
import { deleteEmployee } from '../api'

export const employeeColumns = (
  departments: IDepartment[],
  managers: IEmployee[]
): ColumnDef<IEmployee>[] => [
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
      const roleConfig = EMPLOYEE_ROLE_STYLES[role]

      if (!roleConfig) return '-'

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
    cell: ({ row }) => {
      const departmentName = row.original.department?.name
      return departmentName || '-'
    },
  },
  {
    accessorKey: 'manager.name',
    header: 'Gestor',
    cell: ({ row }) => {
      const managerName = row.original.manager?.name
      return managerName || 'N/A'
    },
  },
  {
    accessorKey: 'created_at',
    header: 'Data de criação',
    cell: ({ row }) => {
      const date = row.original.created_at
      return date ? formatToBrazilianDatetime(date) : '-'
    },
  },
  {
    id: 'actions',
    header: 'Ações',
    cell: ({ row }) => {
      const employee = row.original

      return (
        <>
          <UpdateEmployeeButton employee={employee} departments={departments} managers={managers} />

          <DeleteButton id={employee.id} onDelete={deleteEmployee} entityName="usuário" />
        </>
      )
    },
  },
]