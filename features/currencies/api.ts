import { api } from '@/lib/http/api'
import { AxiosInstance } from 'axios'
import { ICurrency } from './types'

export const getCurrencies = async (axiosInstance: AxiosInstance = api): Promise<ICurrency[]> => {
  const { data } = await axiosInstance.get<ICurrency[]>('/currencies')
  return data
}
