import { api } from '@/lib/http/api'
import { IEmployee, CreateEmployeeDto, UpdateEmployeeDto } from './types'

export const getEmployees = async (): Promise<IEmployee[]> => {
  const { data } = await api.get<IEmployee[]>('/employees')
  return data
}

export const getEmployeeById = async (id: string): Promise<IEmployee> => {
  const { data } = await api.get<IEmployee>(`/employees/${id}`)
  return data
}

export const createEmployee = async (payload: CreateEmployeeDto): Promise<IEmployee> => {
  console.log(payload)
  const { data } = await api.post<IEmployee>('/employees', payload)
  return data
}

export const updateEmployee = async (
  id: string,
  payload: UpdateEmployeeDto
): Promise<IEmployee> => {
  const { data } = await api.put<IEmployee>(`/employees/${id}`, payload)
  return data
}

export const deleteEmployee = async (id: string): Promise<void> => {
  await api.delete(`/employees/${id}`)
}
