import { api } from '@/lib/utils/api'
import { IDepartment } from './types'
import { DepartmentFormData } from './schema'

export async function getDepartments(): Promise<IDepartment[]> {
  const { data } = await api.get<IDepartment[]>('/departments')
  return data
}

export async function createDepartment(payload: DepartmentFormData): Promise<IDepartment> {
  const { data } = await api.post<IDepartment>('/departments', payload)
  return data
}

export async function updateDepartment(
  id: string,
  payload: DepartmentFormData
): Promise<IDepartment> {
  const { data } = await api.put<IDepartment>(`/departments/${id}`, payload)
  return data
}

export async function deleteDepartment(id: string): Promise<void> {
  await api.delete(`/departments/${id}`)
}
