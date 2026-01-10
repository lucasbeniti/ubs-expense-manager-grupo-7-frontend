import { api } from '@/lib/http/api'
import {
  CategoryExpenseReportDto,
  DepartmentBudgetComparativeReportDto,
  EmployeeExpenseReportDto,
} from './types'

export const getEmployeeExpenses = async (
  startDate?: string,
  endDate?: string
): Promise<EmployeeExpenseReportDto[]> => {
  const today = new Date().toISOString().split('T')[0]

  const finalStartDate = startDate ?? today
  const finalEndDate = endDate ?? today

  const { data } = await api.get<EmployeeExpenseReportDto[]>('/reports/employee-expenses', {
    params: {
      startDate: finalStartDate,
      endDate: finalEndDate,
    },
  })

  return data
}

export const getCategoryExpenses = async (): Promise<CategoryExpenseReportDto[]> => {
  const { data } = await api.get<CategoryExpenseReportDto[]>('/reports/category-expenses')

  return data
}

export const getDepartmentBudgetComparative = async (): Promise<
  DepartmentBudgetComparativeReportDto[]
> => {
  const { data } = await api.get<DepartmentBudgetComparativeReportDto[]>(
    '/reports/department-budget-comparative'
  )

  return data
}
