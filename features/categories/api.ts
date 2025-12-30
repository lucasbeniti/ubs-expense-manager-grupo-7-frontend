import { api } from '@/lib/utils/api'
import { ICategory, CreateCategoryDTO, UpdateCategoryDTO } from './types'

export async function getCategories(): Promise<ICategory[]> {
  const { data } = await api.get<ICategory[]>('/categories')
  return data
}

export async function getCategoryById(id: string): Promise<ICategory> {
  const { data } = await api.get<ICategory>(`/categories/${id}`)
  return data
}

export async function createCategory(payload: CreateCategoryDTO): Promise<ICategory> {
  const { data } = await api.post<ICategory>('/categories', payload)
  return data
}

export async function updateCategory(id: string, payload: UpdateCategoryDTO): Promise<ICategory> {
  const { data } = await api.put<ICategory>(`/categories/${id}`, payload)
  return data
}

export async function deleteCategory(id: string): Promise<void> {
  await api.delete(`/categories/${id}`)
}
