import { api } from '@/lib/utils/api'
import { CreateCategoryDTO, ICategory, UpdateCategoryDTO } from '../types/category'

class CategoryService {
  async getAll(): Promise<ICategory[]> {
    const { data } = await api.get<ICategory[]>('/categories')

    return data
  }

  async getById(id: string): Promise<ICategory> {
    const { data } = await api.get<ICategory>(`/categories/${id}`)

    return data
  }

  async create(data: CreateCategoryDTO): Promise<ICategory> {
    const response = await api.post<ICategory>('/categories', data)

    return response.data
  }

  async update(id: string, data: UpdateCategoryDTO): Promise<ICategory> {
    const response = await api.put<ICategory>(`/categories/${id}`, data)

    return response.data
  }

  async delete(id: string): Promise<void> {
    await api.delete(`/categories/${id}`)
  }
}

export const categoryService = new CategoryService()
