import { api } from '@/lib/http/api'
import { IExpenseLog } from './types'

export const getExpenseLogs = async (): Promise<IExpenseLog[]> => {
  const { data } = await api.get<IExpenseLog[]>('/expense-logs')

  return data
}
