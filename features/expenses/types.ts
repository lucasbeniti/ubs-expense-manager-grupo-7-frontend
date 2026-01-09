export type ExpenseStatus = 'pending' | 'manager_approved' | 'finance_approved' | 'rejected'

export interface IExpense {
  expense_id: string
  description: string
  date: string
  status: ExpenseStatus
  amount: number
  currency_id: string
  employee_id: string
  employee_name: string
  category_id: string
  category_name: string
  created_at: string
  receipt_url: string
}

export interface CreateExpenseDto {
  description: string
  date: string
  amount: number
  currency_id: string
  employee_id: string
  category_id: string
}
