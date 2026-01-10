export interface EmployeeExpenseChartItem {
  name: string
  total: number
}

export interface CategoryExpenseChartItem {
  name: string
  total: number
  key: string
}

export interface DepartmentBudgetComparativeChartItem {
  name: string
  used: number
  remaining: number
}

export interface EmployeeExpenseReportDto {
  employee_id: number
  employee_name: string
  total_amount: number
  expenses: {
    expense_id: number
    date: string
    description: string
    amount: number
  }[]
}

export interface CategoryExpenseReportDto {
  category_id: string
  category_name: string
  total: number
}

export interface DepartmentBudgetComparativeReportDto {
  department_id: string
  department_name: string
  monthly_budget: number
  total: number
}
