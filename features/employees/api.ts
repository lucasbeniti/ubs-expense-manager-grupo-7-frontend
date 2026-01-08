// // 

// import { api } from '@/lib/http/api'
// import { IEmployee, CreateEmployeeDTO, UpdateEmployeeDTO } from './types'

// // Dados mockados temporários
// let mockEmployees: IEmployee[] = [
//   { id: '1', name: 'João Silva', email: 'joao.silva@empresa.com', cpf: '123.456.789-00', phone: '(11) 98765-4321' },
//   { id: '2', name: 'Maria Santos', email: 'maria.santos@empresa.com', cpf: '987.654.321-00', phone: '(11) 91234-5678' },
//   { id: '3', name: 'Pedro Oliveira', email: 'pedro.oliveira@empresa.com', cpf: '456.789.123-00', phone: '(11) 99876-5432' },
// ]

// export const getEmployees = async (): Promise<IEmployee[]> => {
//   await new Promise(resolve => setTimeout(resolve, 500))
//   return mockEmployees
// }

// export const getEmployeeById = async (id: string): Promise<IEmployee> => {
//   await new Promise(resolve => setTimeout(resolve, 300))
//   const employee = mockEmployees.find(emp => emp.id === id)
//   if (!employee) throw new Error('Funcionário não encontrado')
//   return employee
// }

// export const createEmployee = async (payload: CreateEmployeeDTO): Promise<IEmployee> => {
//   await new Promise(resolve => setTimeout(resolve, 500))
//   const newEmployee: IEmployee = {
//     id: String(mockEmployees.length + 1),
//     ...payload
//   }
//   mockEmployees.push(newEmployee)
//   return newEmployee
// }

// export const updateEmployee = async (
//   id: string,
//   payload: UpdateEmployeeDTO
// ): Promise<IEmployee> => {
//   await new Promise(resolve => setTimeout(resolve, 500))
//   const index = mockEmployees.findIndex(emp => emp.id === id)
//   if (index === -1) throw new Error('Funcionário não encontrado')
  
//   mockEmployees[index] = {
//     ...mockEmployees[index],
//     ...payload
//   }
//   return mockEmployees[index]
// }

// export const deleteEmployee = async (id: string): Promise<void> => {
//   await new Promise(resolve => setTimeout(resolve, 500))
//   mockEmployees = mockEmployees.filter(emp => emp.id !== id)
// }

import { api } from '@/lib/http/api'
import { IEmployee, CreateEmployeeDTO, UpdateEmployeeDTO } from './types'

// Dados mockados temporários
let mockEmployees: IEmployee[] = [
  { 
    id: '1', 
    name: 'João Silva', 
    email: 'joao.silva@empresa.com', 
    cpf: '123.456.789-00', 
    phone: '(11) 98765-4321',
    role: 'admin',
    department: { id: '1', name: 'Tecnologia da Informação' },
    manager: null
  },
  { 
    id: '2', 
    name: 'Maria Santos', 
    email: 'maria.santos@empresa.com', 
    cpf: '987.654.321-00', 
    phone: '(11) 91234-5678',
    role: 'manager',
    department: { id: '2', name: 'Recursos Humanos' },
    manager: { id: '1', name: 'João Silva' }
  },
  { 
    id: '3', 
    name: 'Pedro Oliveira', 
    email: 'pedro.oliveira@empresa.com', 
    cpf: '456.789.123-00', 
    phone: '(11) 99876-5432',
    role: 'user',
    department: { id: '1', name: 'Tecnologia da Informação' },
    manager: { id: '1', name: 'João Silva' }
  },
  { 
    id: '4', 
    name: 'Ana Costa', 
    email: 'ana.costa@empresa.com', 
    cpf: '321.654.987-00', 
    phone: '(11) 97654-3210',
    role: 'user',
    department: { id: '3', name: 'Financeiro' },
    manager: { id: '2', name: 'Maria Santos' }
  },
]

export const getEmployees = async (): Promise<IEmployee[]> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockEmployees
}

export const getEmployeeById = async (id: string): Promise<IEmployee> => {
  await new Promise(resolve => setTimeout(resolve, 300))
  const employee = mockEmployees.find(emp => emp.id === id)
  if (!employee) throw new Error('Funcionário não encontrado')
  return employee
}

export const createEmployee = async (payload: CreateEmployeeDTO): Promise<IEmployee> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const newEmployee: IEmployee = {
    id: String(mockEmployees.length + 1),
    ...payload
  }
  mockEmployees.push(newEmployee)
  return newEmployee
}

export const updateEmployee = async (
  id: string,
  payload: UpdateEmployeeDTO
): Promise<IEmployee> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const index = mockEmployees.findIndex(emp => emp.id === id)
  if (index === -1) throw new Error('Funcionário não encontrado')
  
  mockEmployees[index] = {
    ...mockEmployees[index],
    ...payload
  }
  return mockEmployees[index]
}

export const deleteEmployee = async (id: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  mockEmployees = mockEmployees.filter(emp => emp.id !== id)
}