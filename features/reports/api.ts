import { api } from '@/lib/http/api'
import { AxiosInstance } from 'axios'
import {
  CategoryExpenseReportDto,
  DepartmentBudgetComparativeReportDto,
  EmployeeExpenseReportDto,
} from './types'

export const getEmployeeExpenses = async (
  startDate?: string,
  endDate?: string,
  axiosInstance: AxiosInstance = api
): Promise<EmployeeExpenseReportDto[]> => {
  const today = new Date().toISOString().split('T')[0]
  const finalStartDate = startDate ?? today
  const finalEndDate = endDate ?? today

  const { data } = await axiosInstance.get<EmployeeExpenseReportDto[]>(
    '/reports/employee-expenses',
    {
      params: { startDate: finalStartDate, endDate: finalEndDate },
    }
  )
  return data
}

export const getCategoryExpenses = async (
  axiosInstance: AxiosInstance = api
): Promise<CategoryExpenseReportDto[]> => {
  const { data } = await axiosInstance.get<CategoryExpenseReportDto[]>('/reports/category-expenses')
  return data
}

export const getDepartmentBudgetComparative = async (
  axiosInstance: AxiosInstance = api
): Promise<DepartmentBudgetComparativeReportDto[]> => {
  const { data } = await axiosInstance.get<DepartmentBudgetComparativeReportDto[]>(
    '/reports/department-budget-comparative'
  )
  return data
}
