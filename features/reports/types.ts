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
  employeeId: number
  employeeName: string
  totalAmount: number
  expenses: {
    expenseId: number
    date: string
    description: string
    amount: number
  }[]
}

export interface CategoryExpenseReportDto {
  categoryId: string
  categoryName: string
  total: number
}

export interface DepartmentBudgetComparativeReportDto {
  departmentId: string
  departmentName: string
  monthlyBudget: number
  total: number
}
