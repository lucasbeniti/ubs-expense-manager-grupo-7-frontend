export enum EExpenseLogAction {
  CREATED = 'CREATED',
  APPROVED_FINANCE = 'APPROVED_FINANCE',
  APPROVED_MANAGER = 'APPROVED_MANAGER',
  IGNORED = 'IGNORED',
  UPDATED = 'UPDATED',
}

export interface IExpenseLog {
  id: string
  action: EExpenseLogAction
  comments: string
  expenseId: string
  employeeId: string
  createdAt: string
}
