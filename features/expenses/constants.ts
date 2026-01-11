import { EExpenseStatus } from './types'

export const EXPENSE_STATUS_STYLES: Record<string, { label: string; className: string }> = {
  PENDING: {
    label: 'Pendente',
    className: 'bg-blue-100 text-blue-800 border border-blue-200',
  },
  MANAGER_APPROVED: {
    label: 'Aprovado pelo Gestor',
    className: 'bg-purple-100 text-purple-800 border border-purple-200',
  },
  FINANCE_APPROVED: {
    label: 'Aprovado pelo Financeiro',
    className: 'bg-green-100 text-green-800 border border-green-200',
  },
  REJECTED: {
    label: 'Rejeitado',
    className: 'bg-red-100 text-red-800 border border-red-200',
  },
}

export const EXPENSE_STATUS_FLOW: Record<
  EExpenseStatus,
  {
    next?: EExpenseStatus
    reject?: EExpenseStatus
  }
> = {
  [EExpenseStatus.PENDING]: {
    next: EExpenseStatus.MANAGER_APPROVED,
    reject: EExpenseStatus.REJECTED,
  },
  [EExpenseStatus.MANAGER_APPROVED]: {
    next: EExpenseStatus.FINANCE_APPROVED,
    reject: EExpenseStatus.REJECTED,
  },
  [EExpenseStatus.FINANCE_APPROVED]: {},
  [EExpenseStatus.REJECTED]: {},
}
