export enum EEmployeeRole {
  EMPLOYEE = 'EMPLOYEE',
  MANAGER = 'MANAGER',
  FINANCE = 'FINANCE',
}

export interface IEmployee {
  employee_id: string
  name: string
  email: string
  cpf: string
  role: EEmployeeRole
  department_id: string
  department_name: string
  manager_id?: string
  manager_name?: string
  created_at: string
}

export interface CreateEmployeeDto {
  name: string
  email: string
  cpf: string
  role: EEmployeeRole
  department_id: string
  manager_id?: string
}

export interface UpdateEmployeeDto {
  name?: string
  email?: string
  cpf?: string
  role?: EEmployeeRole
  department_id?: string
  manager_id?: string | null
}
