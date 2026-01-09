import { api } from '@/lib/http/api'
import { ICategory, CreateCategoryDto, UpdateCategoryDto } from './types'

export const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await api.get<ICategory[]>('/categories')
  return data
}

export const getCategoryById = async (id: string): Promise<ICategory> => {
  const { data } = await api.get<ICategory>(`/categories/${id}`)
  return data
}

export const createCategory = async (payload: CreateCategoryDto): Promise<ICategory> => {
  const { data } = await api.post<ICategory>('/categories', payload)
  return data
}

export const updateCategory = async (
  id: string,
  payload: UpdateCategoryDto
): Promise<ICategory> => {
  const { data } = await api.put<ICategory>(`/categories/${id}`, payload)
  return data
}

export const deleteCategory = async (id: string): Promise<void> => {
  await api.delete(`/categories/${id}`)
}
