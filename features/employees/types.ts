export enum EEmployeeRole {
  EMPLOYEE = 'EMPLOYEE',
  MANAGER = 'MANAGER',
  FINANCE = 'FINANCE',
}

export interface IEmployee {
  id: string
  name: string
  email: string
  cpf: string
  role: EEmployeeRole
  departmentId: string
  departmentName: string
  managerId?: string
  managerName?: string
  createdAt: string
}

export interface CreateEmployeeDto {
  name: string
  email: string
  cpf: string
  role: EEmployeeRole
  departmentId: string
  managerId?: string
}

export interface UpdateEmployeeDto {
  name?: string
  email?: string
  cpf?: string
  role?: EEmployeeRole
  departmentId?: string
  managerId?: string | null
}
