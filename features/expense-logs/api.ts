import { api } from '@/lib/http/api'
import { AxiosInstance } from 'axios'
import { IExpenseLog } from './types'

export const getExpenseLogs = async (
  axiosInstance: AxiosInstance = api
): Promise<IExpenseLog[]> => {
  const { data } = await axiosInstance.get<IExpenseLog[]>('/expense-logs')
  return data
}
