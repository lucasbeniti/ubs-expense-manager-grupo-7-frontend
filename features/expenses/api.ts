import { api } from '@/lib/http/api'
import { CreateExpenseDto, EExpenseStatus, IExpense } from './types'

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

export const updateExpenseStatus = async (
  id: string,
  status: EExpenseStatus
): Promise<IExpense> => {
  const { data } = await api.patch<IExpense>(`/expenses/${id}`, {
    status,
  })

  return data
}
