export interface EmployeeExpenseChartItem {
  name: string
  total: number
}

export interface CategoryExpenseChartItem {
  name: string
  total: number
  key: string
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
  category_id: string
  category_name: string
  total: number
}
