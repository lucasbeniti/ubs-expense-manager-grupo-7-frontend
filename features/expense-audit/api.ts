import { AuditDashboardData, AuditFilters } from './types'

// Dados mockados
const mockData: AuditDashboardData = {
  totalExpenses: 2500,
  expensesByCategory: [
  { name: 'Alimentação', value: 800, color: '#3B82F6' },
  { name: 'Transporte', value: 600, color: '#10B981' },
  { name: 'Saúde', value: 450, color: '#F59E0B' },
  { name: 'Educação', value: 350, color: '#8B5CF6' },
  { name: 'Outros', value: 300, color: '#EF4444' },
  ],
  expensesByDepartment: [
    { department: 'Financeiro', amount: 1200 },
    { department: 'TI', amount: 2800 },
    { department: 'Vendas', amount: 3200 },
    { department: 'Marketing', amount: 4000 },
  ],
  approvalSummary: [
    { status: 'approved', count: 34, percentage: 48 },
    { status: 'pending', count: 18, percentage: 25 },
    { status: 'rejected', count: 14, percentage: 20 },
  ],
}

export const getAuditDashboardData = async (
  filters?: AuditFilters
): Promise<AuditDashboardData> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Em produção, aqui faria a chamada real com os filtros
  console.log('Filters applied:', filters)
  
  return mockData
}