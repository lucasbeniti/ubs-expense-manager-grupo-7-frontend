export enum EExpenseLogAction {
  CREATED = 'CREATED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
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
