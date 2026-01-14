import { api } from '@/lib/http/api'
import { AxiosInstance } from 'axios'
import { ICategory, CreateCategoryDto, UpdateCategoryDto } from './types'

export const getCategories = async (axiosInstance: AxiosInstance = api): Promise<ICategory[]> => {
  const { data } = await axiosInstance.get<ICategory[]>('/categories')
  return data
}

export const getCategoryById = async (
  id: string,
  axiosInstance: AxiosInstance = api
): Promise<ICategory> => {
  const { data } = await axiosInstance.get<ICategory>(`/categories/${id}`)
  return data
}

export const createCategory = async (
  payload: CreateCategoryDto,
  axiosInstance: AxiosInstance = api
): Promise<ICategory> => {
  const { data } = await axiosInstance.post<ICategory>('/categories', payload)
  return data
}

export const updateCategory = async (
  id: string,
  payload: UpdateCategoryDto,
  axiosInstance: AxiosInstance = api
): Promise<ICategory> => {
  const { data } = await axiosInstance.put<ICategory>(`/categories/${id}`, payload)
  return data
}

export const deleteCategory = async (
  id: string,
  axiosInstance: AxiosInstance = api
): Promise<void> => {
  await axiosInstance.delete(`/categories/${id}`)
}
