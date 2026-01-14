import { api } from '@/lib/http/api'
import { AxiosInstance } from 'axios'
import { CreateExpenseDto, EExpenseStatus, IExpense } from './types'

export const getExpenses = async (axiosInstance: AxiosInstance = api): Promise<IExpense[]> => {
  const { data } = await axiosInstance.get<IExpense[]>('/expenses')
  return data
}

export const getExpenseById = async (
  id: string,
  axiosInstance: AxiosInstance = api
): Promise<IExpense> => {
  const { data } = await axiosInstance.get<IExpense>(`/expenses/${id}`)
  return data
}

export const createExpense = async (
  payload: CreateExpenseDto,
  axiosInstance: AxiosInstance = api
): Promise<IExpense> => {
  const { data } = await axiosInstance.post<IExpense>('/expenses', payload)
  return data
}

export const updateExpenseStatus = async (
  id: string,
  status: EExpenseStatus,
  axiosInstance: AxiosInstance = api
): Promise<IExpense> => {
  const { data } = await axiosInstance.patch<IExpense>(`/expenses/${id}`, { status })
  return data
}
