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
  id: string
  name: string
  email: string
  role: EmployeeRole

  cpf?: string
  phone?: string

  department?: IDepartmentSummary
  manager?: IEmployeeSummary | null

  created_at?: string
}

export interface CreateEmployeeDTO {
  name: string
  email: string
  role: EmployeeRole
  fk_department_id: string
  fk_manager_id?: string
}

export interface UpdateEmployeeDTO {
  name?: string
  email?: string
  role?: EmployeeRole
  fk_department_id?: string
  fk_manager_id?: string
}
