import { api } from '@/lib/utils/api'
import { ICategory, CreateCategoryDTO, UpdateCategoryDTO } from './types'

export const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await api.get<ICategory[]>('/categories')
  return data
}

export const getCategoryById = async (id: string): Promise<ICategory> => {
  const { data } = await api.get<ICategory>(`/categories/${id}`)
  return data
}

export const createCategory = async (payload: CreateCategoryDTO): Promise<ICategory> => {
  const { data } = await api.post<ICategory>('/categories', payload)
  return data
}

export const updateCategory = async (
  id: string,
  payload: UpdateCategoryDTO
): Promise<ICategory> => {
  const { data } = await api.put<ICategory>(`/categories/${id}`, payload)
  return data
}

export const deleteCategory = async (id: string): Promise<void> => {
  await api.delete(`/categories/${id}`)
}
