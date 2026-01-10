import {
  CategoryExpenseChartItem,
  CategoryExpenseReportDto,
  DepartmentBudgetComparativeChartItem,
  DepartmentBudgetComparativeReportDto,
  EmployeeExpenseReportDto,
} from './types'
import { EmployeeExpenseChartItem } from './types'

export const mapEmployeeExpensesToChart = (
  data: EmployeeExpenseReportDto[]
): EmployeeExpenseChartItem[] => {
  return data.map((item) => ({
    name: item.employee_name,
    total: item.total_amount,
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

export const mapDepartmentBudgetComparativeToChart = (
  data: DepartmentBudgetComparativeReportDto[]
): DepartmentBudgetComparativeChartItem[] => {
  return data.map((item) => ({
    name: item.department_name,
    used: item.total,
    remaining: item.total - item.monthly_budget,
  }))
}
