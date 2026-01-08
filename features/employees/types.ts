export type EmployeeRole = 'employee' | 'manager' | 'finance'

export interface IEmployee {
  employee_id: string
  name: string
  email: string
  cpf: string
  role: EmployeeRole
  department_id: string
  department_name: string
  manager_id?: string
  manager_name?: string
  created_at: string
}

export interface CreateEmployeeDTO {
  name: string
  email: string
  cpf: string
  role: EmployeeRole
  department_id: string
  manager_id?: string
}

export interface UpdateEmployeeDTO {
  name?: string
  email?: string
  cpf?: string
  role?: EmployeeRole
  department_id?: string
  manager_id?: string | null
}
