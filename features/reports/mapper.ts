import {
  CategoryExpenseChartItem,
  CategoryExpenseReportDto,
  EmployeeExpenseReportDto,
} from './types'
import { EmployeeExpenseChartItem } from './types'

export const mapEmployeeExpensesToChart = (
  data: EmployeeExpenseReportDto[]
): EmployeeExpenseChartItem[] => {
  return data.map((item) => ({
    name: item.employeeName,
    total: item.totalAmount,
  }))
}

export const mapCategoryExpensesToChart = (
  data: CategoryExpenseReportDto[]
): CategoryExpenseChartItem[] => {
  return data.map((item) => ({
    name: item.category_name,
    total: item.total,
    key: item.category_id,
  }))
}
