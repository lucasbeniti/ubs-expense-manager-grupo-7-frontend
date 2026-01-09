'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { FilterIcon } from 'lucide-react'
import { IEmployee } from '@/features/employees/types'
import { IDepartment } from '@/features/departments/types'

interface AuditFiltersProps {
  employees: IEmployee[]
  departments: IDepartment[]
  onFilter: (filters: {
    employee_id?: string
    department_id?: string
    start_date: string
    end_date: string
  }) => void
}

const AuditFilters = ({ employees, departments, onFilter }: AuditFiltersProps) => {
  const [employeeId, setEmployeeId] = useState<string>('')
  const [departmentId, setDepartmentId] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('2024-01-01')
  const [endDate, setEndDate] = useState<string>('2024-04-30')

  const handleFilter = () => {
    onFilter({
      employee_id: employeeId || undefined,
      department_id: departmentId || undefined,
      start_date: startDate,
      end_date: endDate,
    })
  }

  return (
    <div className="flex items-center gap-4 mb-6">
      <Select value={employeeId} onValueChange={setEmployeeId}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Todos Funcionários" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Funcionários</SelectItem>
          {employees.map((employee) => (
            <SelectItem key={employee.id} value={employee.id}>
              {employee.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={departmentId} onValueChange={setDepartmentId}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Todos Departamentos" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Departamentos</SelectItem>
          {departments.map((department) => (
            <SelectItem key={department.id} value={department.id}>
              {department.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-[160px]"
      />

      <span className="text-muted-foreground">→</span>

      <Input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-[160px]"
      />

      <Button 
        onClick={handleFilter}
        className="bg-orange-500 hover:bg-orange-600"
      >
        <FilterIcon className="size-4" />
        Filtrar Auditoria
      </Button>
    </div>
  )
}

export default AuditFilters