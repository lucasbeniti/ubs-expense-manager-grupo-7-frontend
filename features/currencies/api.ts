import { api } from '@/lib/http/api'
import { ICurrency } from './types'

export const getCurrencies = async (): Promise<ICurrency[]> => {
  const { data } = await api.get<ICurrency[]>('/currencies')
  return data
}
