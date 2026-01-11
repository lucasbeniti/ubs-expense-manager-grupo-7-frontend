export const ALERT_STATUS_STYLES: Record<string, { label: string; className: string }> = {
  new: {
    label: 'Novo',
    className: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  resolved: {
    label: 'Resolvido',
    className: 'bg-green-100 text-green-800 border-green-200',
  },
}

export const ALERT_TYPE_STYLES: Record<string, { label: string; className: string }> = {
  category: {
    label: 'Categoria',
    className: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  department: {
    label: 'Departamento',
    className: 'bg-orange-100 text-orange-800 border-orange-200',
  },
}
