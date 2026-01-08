import { ICategory } from '../categories/types'
import { IEmployee } from '../employees/types'
import { IDepartment } from '../departments/types'

export type ExpenseStatus = 'pending' | 'approved' | 'rejected'

export interface IExpense {
  id: string
  amount: number
  date: string
  description: string
  category_id: string
  category?: ICategory
  employee_id: string
  employee?: IEmployee
  department?: IDepartment
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