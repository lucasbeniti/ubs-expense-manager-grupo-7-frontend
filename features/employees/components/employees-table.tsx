'use client'

import { DataTable } from '@/components/ui/data-table'
import { employeeColumns } from './employee-columns'
import { IDepartment } from '@/features/departments/types'
import { IEmployee } from '../types'
import CreateEmployeeButton from './create-employee-button'

interface EmployeesTableProps {
  employees: IEmployee[]
  departments: IDepartment[]
  managers: IEmployee[]
}

export default function EmployeesTable({ employees, departments, managers }: EmployeesTableProps) {
  return (
    <DataTable
      data={employees}
      columns={employeeColumns(departments, managers)}
      actions={<CreateEmployeeButton departments={departments} managers={managers} />}
    />
  )
}
