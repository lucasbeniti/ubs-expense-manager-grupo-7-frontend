export type EmployeeRole = 'admin' | 'manager' | 'user'

export interface IDepartmentSummary {
  id: string
  name: string
}

export interface IEmployeeSummary {
  id: string
  name: string
}

export interface IEmployee {
  employee_id: string
  name: string
  email: string
  cpf: string
  role: EmployeeRole

  cpf?: string
  phone?: string

  department?: IDepartmentSummary
  manager?: IEmployeeSummary | null

  created_at?: string
}

export interface CreateEmployeeDto {
  name: string
  email: string
  cpf: string
  role: EmployeeRole
  department_id: string
  manager_id?: string
}

export interface UpdateEmployeeDto {
  name?: string
  email?: string
  cpf?: string
  role?: EmployeeRole
  fk_department_id?: string
  fk_manager_id?: string
}
