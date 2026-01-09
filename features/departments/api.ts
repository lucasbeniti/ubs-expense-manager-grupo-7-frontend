// import { IDepartment } from './types'
// import { DepartmentFormData } from './schema'
// import { api } from '@/lib/http/api'

// export const getDepartments = async (): Promise<IDepartment[]> => {
//   const { data } = await api.get<IDepartment[]>('/departments')
//   return data
// }

// export const createDepartment = async (payload: DepartmentFormData): Promise<IDepartment> => {
//   const { data } = await api.post<IDepartment>('/departments', payload)
//   return data
// }

// export const updateDepartment = async (
//   id: string,
//   payload: DepartmentFormData
// ): Promise<IDepartment> => {
//   const { data } = await api.put<IDepartment>(`/departments/${id}`, payload)
//   return data
// }

// export const deleteDepartment = async (id: string): Promise<void> => {
//   await api.delete(`/departments/${id}`)
// }

import { api } from '@/lib/http/api'
import { IDepartment, CreateDepartmentDTO, UpdateDepartmentDTO } from './types'

// Dados mockados temporários
let mockDepartments: IDepartment[] = [
  { id: '1', name: 'Recursos Humanos', description: 'Departamento de RH' },
  { id: '2', name: 'Tecnologia da Informação', description: 'Departamento de TI' },
  { id: '3', name: 'Financeiro', description: 'Departamento Financeiro' },
  { id: '4', name: 'Marketing', description: 'Departamento de Marketing' },
  { id: '5', name: 'Vendas', description: 'Departamento de Vendas' },
]

export const getDepartments = async (): Promise<IDepartment[]> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockDepartments
}

export const getDepartmentById = async (id: string): Promise<IDepartment> => {
  await new Promise(resolve => setTimeout(resolve, 300))
  const department = mockDepartments.find(dept => dept.id === id)
  if (!department) throw new Error('Departamento não encontrado')
  return department
}

export const createDepartment = async (payload: CreateDepartmentDTO): Promise<IDepartment> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const newDepartment: IDepartment = {
    id: String(mockDepartments.length + 1),
    ...payload
  }
  mockDepartments.push(newDepartment)
  return newDepartment
}

export const updateDepartment = async (
  id: string,
  payload: UpdateDepartmentDTO
): Promise<IDepartment> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const index = mockDepartments.findIndex(dept => dept.id === id)
  if (index === -1) throw new Error('Departamento não encontrado')
  
  mockDepartments[index] = {
    ...mockDepartments[index],
    ...payload
  }
  return mockDepartments[index]
}

export const deleteDepartment = async (id: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  mockDepartments = mockDepartments.filter(dept => dept.id !== id)
}