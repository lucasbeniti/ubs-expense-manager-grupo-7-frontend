import { api } from '@/lib/http/api'
import { IAlert } from './types'

export const getAlerts = async (): Promise<IAlert[]> => {
  const { data } = await api.get<IAlert[]>('/alerts')

  return data
}

export const updateAlertStatus = async (id: string): Promise<IAlert> => {
  const { data } = await api.patch<IAlert>(`/alerts/${id}`)

  return data
}
