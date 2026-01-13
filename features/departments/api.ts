import { IDepartment } from './types'
import { DepartmentFormData } from './schema'
import { api } from '@/lib/http/api'

export const getDepartments = async (): Promise<IDepartment[]> => {
  const { data } = await api.get<IDepartment[]>('/departments')
  return data
}

export const createDepartment = async (payload: DepartmentFormData): Promise<IDepartment> => {
  const { data } = await api.post<IDepartment>('/departments', payload)

  return data
}

export const updateDepartment = async (
  id: string,
  payload: DepartmentFormData
): Promise<IDepartment> => {
  const { data } = await api.put<IDepartment>(`/departments/${id}`, payload)
  return data
}

export const deleteDepartment = async (id: string): Promise<void> => {
  await api.delete(`/departments/${id}`)
}
