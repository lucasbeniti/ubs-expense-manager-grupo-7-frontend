import { api } from '@/lib/http/api'
import { IEmployee, CreateEmployeeDto, UpdateEmployeeDto } from './types'
import { AxiosInstance } from 'axios'

export const getEmployees = async (axiosInstance: AxiosInstance = api): Promise<IEmployee[]> => {
  const { data } = await axiosInstance.get<IEmployee[]>('/employees')
  return data
}

export const getEmployeeById = async (id: string): Promise<IEmployee> => {
  const { data } = await api.get<IEmployee>(`/employees/${id}`)
  return data
}

export const createEmployee = async (payload: CreateEmployeeDto): Promise<IEmployee> => {
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
