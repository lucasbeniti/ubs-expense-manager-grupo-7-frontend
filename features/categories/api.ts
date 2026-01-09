// import { api } from '@/lib/http/api'
// import { ICategory, CreateCategoryDTO, UpdateCategoryDTO } from './types'

// export const getCategories = async (): Promise<ICategory[]> => {
//   const { data } = await api.get<ICategory[]>('/categories')
//   return data
// }

// export const getCategoryById = async (id: string): Promise<ICategory> => {
//   const { data } = await api.get<ICategory>(`/categories/${id}`)
//   return data
// }

// export const createCategory = async (payload: CreateCategoryDTO): Promise<ICategory> => {
//   const { data } = await api.post<ICategory>('/categories', payload)
//   return data
// }

// export const updateCategory = async (
//   id: string,
//   payload: UpdateCategoryDTO
// ): Promise<ICategory> => {
//   const { data } = await api.put<ICategory>(`/categories/${id}`, payload)
//   return data
// }

// export const deleteCategory = async (id: string): Promise<void> => {
//   await api.delete(`/categories/${id}`)
// }

import { api } from '@/lib/http/api'
import { ICategory, CreateCategoryDto, UpdateCategoryDto } from './types'

// Dados mockados temporários
let mockCategories: ICategory[] = [
  { id: '1', name: 'Alimentação', description: 'Despesas com alimentação' },
  { id: '2', name: 'Transporte', description: 'Despesas com transporte' },
  { id: '3', name: 'Saúde', description: 'Despesas com saúde' },
  { id: '4', name: 'Educação', description: 'Despesas com educação' },
]

export const getCategories = async (): Promise<ICategory[]> => {
  // Simulando delay da API
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockCategories
}

export const getCategoryById = async (id: string): Promise<ICategory> => {
  await new Promise(resolve => setTimeout(resolve, 300))
  const category = mockCategories.find(cat => cat.id === id)
  if (!category) throw new Error('Categoria não encontrada')
  return category
}

export const createCategory = async (payload: CreateCategoryDTO): Promise<ICategory> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const newCategory: ICategory = {
    id: String(mockCategories.length + 1),
    ...payload
  }
  mockCategories.push(newCategory)
  return newCategory
}

export const updateCategory = async (
  id: string,
  payload: UpdateCategoryDto
): Promise<ICategory> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const index = mockCategories.findIndex(cat => cat.id === id)
  if (index === -1) throw new Error('Categoria não encontrada')
  
  mockCategories[index] = {
    ...mockCategories[index],
    ...payload
  }
  return mockCategories[index]
}

export const deleteCategory = async (id: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  mockCategories = mockCategories.filter(cat => cat.id !== id)
}