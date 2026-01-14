import { api } from '@/lib/http/api'
import { AxiosInstance } from 'axios'
import { IAlert } from './types'

export const getAlerts = async (axiosInstance: AxiosInstance = api): Promise<IAlert[]> => {
  const { data } = await axiosInstance.get<IAlert[]>('/alerts')
  return data
}

export const updateAlertStatus = async (
  id: string,
  axiosInstance: AxiosInstance = api
): Promise<IAlert> => {
  const { data } = await axiosInstance.patch<IAlert>(`/alerts/${id}`)
  return data
}
