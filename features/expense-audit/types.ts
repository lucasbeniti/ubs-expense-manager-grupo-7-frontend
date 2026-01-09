export interface ExpenseByCategory {
  [key: string]: string | number
  name: string
  value: number
  color: string
}


export interface ExpenseByDepartment {
  department: string
  amount: number
}

export interface ApprovalSummary {
  status: 'approved' | 'pending' | 'rejected'
  count: number
  percentage: number
}

export interface AuditFilters {
  employee_id?: string
  department_id?: string
  start_date: string
  end_date: string
}

export interface AuditDashboardData {
  totalExpenses: number
  expensesByCategory: ExpenseByCategory[]
  expensesByDepartment: ExpenseByDepartment[]
  approvalSummary: ApprovalSummary[]
}