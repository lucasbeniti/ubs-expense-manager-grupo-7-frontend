import { api } from '@/lib/http/api'
import { CreateExpenseDto, IExpense, UpdateExpenseDto } from './types'

export const getExpenses = async (): Promise<IExpense[]> => {
  const { data } = await api.get<IExpense[]>('/expenses')
  return data
}

export const getExpenseById = async (id: string): Promise<IExpense> => {
  const { data } = await api.get<IExpense>(`/expenses/${id}`)
  return data
}

export const createExpense = async (payload: CreateExpenseDto): Promise<IExpense> => {
  const { data } = await api.post<IExpense>('/expenses', payload)
  return data
}

export const updateExpense = async (id: string, payload: UpdateExpenseDto): Promise<IExpense> => {
  const { data } = await api.put<IExpense>(`/expenses/${id}`, payload)
  return data
}

export const deleteExpense = async (id: string): Promise<void> => {
  await api.delete(`/expenses/${id}`)
}
