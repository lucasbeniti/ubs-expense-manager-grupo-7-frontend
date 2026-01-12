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
    name: item.employeeName,
    total: item.totalAmount,
  }))
}

export const mapCategoryExpensesToChart = (
  data: CategoryExpenseReportDto[]
): CategoryExpenseChartItem[] => {
  return data.map((item) => ({
    name: item.categoryName,
    total: item.total,
    key: item.categoryId,
  }))
}

export const mapDepartmentBudgetComparativeToChart = (
  data: DepartmentBudgetComparativeReportDto[]
): DepartmentBudgetComparativeChartItem[] => {
  return data.map((item) => ({
    name: item.departmentName,
    used: item.total,
    remaining: item.total - item.monthlyBudget,
  }))
}
