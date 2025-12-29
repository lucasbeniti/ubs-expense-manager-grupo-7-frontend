export type UserRole = 'employee' | 'manager' | 'finance'

export interface IUser {
  id: string
  name: string
  email: string
  role: UserRole
  department: {
    id: string
    name: string
  }
  manager?: {
    id: string
    name: string
  } | null
}

export interface CreateUserDTO {
  name: string
  email: string
  role: UserRole
  department_id: string
  manager_id?: string
}

export interface UpdateUserDTO {
  name?: string
  email?: string
  role?: UserRole
  department_id?: string
  manager_id?: string | null
}
