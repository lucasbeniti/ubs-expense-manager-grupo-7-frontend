import { IDepartment } from './departments/department'

export type UserRole = 'employee' | 'manager' | 'finance'

export interface IUser {
  id: string
  name: string
  email: string
  role: UserRole
  department: IDepartment
  manager?: Pick<IUser, 'id' | 'name' | 'email'>
}
