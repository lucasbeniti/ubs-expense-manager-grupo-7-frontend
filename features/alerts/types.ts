export enum EAlertStatus {
  NEW = 'NEW',
  RESOLVED = 'RESOLVED',
}

export interface IAlert {
  id: string
  message: string
  severity: string
  status: EAlertStatus
  type: string
  expenseId: string
  expenseDescription: string
  createdAt: string
}
