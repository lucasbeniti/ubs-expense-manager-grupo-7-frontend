import { api } from '@/lib/http/api'
import { AxiosInstance } from 'axios'
import { IDepartment } from './types'
import { DepartmentFormData } from './schema'

export const getDepartments = async (
  axiosInstance: AxiosInstance = api
): Promise<IDepartment[]> => {
  const { data } = await axiosInstance.get<IDepartment[]>('/departments')
  return data
}

export const createDepartment = async (
  payload: DepartmentFormData,
  axiosInstance: AxiosInstance = api
): Promise<IDepartment> => {
  const { data } = await axiosInstance.post<IDepartment>('/departments', payload)
  return data
}

export const updateDepartment = async (
  id: string,
  payload: DepartmentFormData,
  axiosInstance: AxiosInstance = api
): Promise<IDepartment> => {
  const { data } = await axiosInstance.put<IDepartment>(`/departments/${id}`, payload)
  return data
}

export const deleteDepartment = async (
  id: string,
  axiosInstance: AxiosInstance = api
): Promise<void> => {
  await axiosInstance.delete(`/departments/${id}`)
}
