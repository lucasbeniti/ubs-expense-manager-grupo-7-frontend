export enum EExpenseStatus {
  PENDING = 'PENDING',
  MANAGER_APPROVED = 'MANAGER_APPROVED',
  FINANCE_APPROVED = 'FINANCE_APPROVED',
  REJECTED = 'REJECTED',
}

export interface IExpense {
  id: string
  description: string
  date: string
  status: EExpenseStatus
  amount: number
  currencyId: string
  employeeId: string
  employeeName: string
  categoryId: string
  categoryName: string
  createdAt: string
  receiptUrl: string
}

export interface CreateExpenseDto {
  description: string
  date: string
  amount: number
  currencyId: string
  employeeId: string
  categoryId: string
}
