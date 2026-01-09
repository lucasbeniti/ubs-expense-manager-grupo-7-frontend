export const EXPENSE_STATUS_STYLES: Record<string, { label: string; className: string }> = {
  pending: {
    label: 'Pendente',
    className: 'bg-blue-100 text-blue-800 border border-blue-200',
  },
  manager_approved: {
    label: 'Aprovado pelo Gestor',
    className: 'bg-purple-100 text-purple-800 border border-purple-200',
  },
  finance_approved: {
    label: 'Aprovado pelo Financeiro',
    className: 'bg-green-100 text-green-800 border border-green-200',
  },
  rejected: {
    label: 'Rejeitado',
    className: 'bg-red-100 text-red-800 border border-red-200',
  },
}
