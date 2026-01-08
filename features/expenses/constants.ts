import { ExpenseStatus } from './types'

export const EXPENSE_STATUS_STYLES: Record<
  ExpenseStatus,
  { label: string; className: string }
> = {
  pending: {
    label: 'Pendente',
    className: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  },
  approved: {
    label: 'Aprovado',
    className: 'bg-green-100 text-green-800 border-green-300',
  },
  rejected: {
    label: 'Rejeitado',
    className: 'bg-red-100 text-red-800 border-red-300',
  },
}

export const EXPENSE_STATUS_OPTIONS = [
  { value: 'pending', label: 'Pendente' },
  { value: 'approved', label: 'Aprovado' },
  { value: 'rejected', label: 'Rejeitado' },
] as const