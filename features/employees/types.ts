export type EmployeeRole = 'employee' | 'manager' | 'finance'

export interface IEmployee {
  id: string
  name: string
  email: string
  role: EmployeeRole
  department: {
    id: string
    name: string
  }
  manager?: {
    id: string
    name: string
  } | null
  created_at: string
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
  fk_manager_id?: string | null
}
