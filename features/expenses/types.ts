export enum EExpenseStatus {
  PENDING = 'PENDING',
  MANAGER_APPROVED = 'MANAGER_APPROVED',
  FINANCE_APPROVED = 'FINANCE_APPROVED',
  REJECTED = 'REJECTED',
}

export interface IExpense {
  expense_id: string
  description: string
  date: string
  status: EExpenseStatus
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
