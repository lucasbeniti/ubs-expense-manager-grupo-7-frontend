import { EExpenseLogAction } from './types'

export const EXPENSE_LOG_ACTION_STYLES: Record<
  EExpenseLogAction,
  { label: string; className: string }
> = {
  [EExpenseLogAction.CREATED]: {
    label: 'Criado',
    className: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  [EExpenseLogAction.APPROVED_FINANCE]: {
    label: 'Aprovado pelo Financeiro',
    className: 'bg-green-100 text-green-800 border-green-200',
  },
  [EExpenseLogAction.APPROVED_MANAGER]: {
    label: 'Aprovado pelo Gestor',
    className: 'bg-orange-100 text-orange-800 border-orange-200',
  },
  [EExpenseLogAction.IGNORED]: {
    label: 'Rejeitado',
    className: 'bg-red-100 text-red-800 border-red-200',
  },
  [EExpenseLogAction.UPDATED]: {
    label: 'Atualizado',
    className: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  },
}
