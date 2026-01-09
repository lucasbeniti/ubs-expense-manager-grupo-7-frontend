import { ICategory } from '../categories/types'
import { IEmployee } from '../employees/types'
import { IDepartment } from '../departments/types'

export type ExpenseStatus = 'pending' | 'approved' | 'rejected'

export interface ICategorySummary {
  id: string
  name: string
}

export interface IEmployeeSummary {
  id: string
  name: string
  email: string
}

export interface IDepartmentSummary {
  id: string
  name: string
}

export interface IExpense {
  id: string
  amount: number
  date: string
  description: string
  category_id: string
  category?: ICategorySummary
  employee_id: string
  employee?: IEmployeeSummary
  department?: IDepartmentSummary
  status: ExpenseStatus
  receipt_url?: string
  created_at?: string
}

export interface CreateExpenseDTO {
  amount: number
  date: string
  description: string
  category_id: string
  employee_id: string
  status: ExpenseStatus
  receipt_url?: string
}

export interface UpdateExpenseDTO {
  amount?: number
  date?: string
  description?: string
  category_id?: string
  employee_id?: string
  status?: ExpenseStatus
  receipt_url?: string
}
