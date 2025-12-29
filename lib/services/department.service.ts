import { api } from '@/lib/utils/api'
import { IDepartment } from '../types/department'

class DepartmentService {
  /**
   * GET /departments
   */
  async getAll(): Promise<IDepartment[]> {
    const { data } = await api.get<IDepartment[]>('/departments')

    return data
  }

  /**
   * GET /departments/{id}
   */
  async getById(id: string): Promise<IDepartment> {
    const { data } = await api.get<IDepartment>(`/departments/${id}`)

    return data
  }

  /**
   * POST /departments
   */
  async create(userData: Omit<IDepartment, 'id'>): Promise<IDepartment> {
    const { data } = await api.post<IDepartment>('/departments', userData)

    return data
  }

  /**
   * PUT /departments/{id}
   */
  async update(id: string, userData: Partial<IDepartment>): Promise<IDepartment> {
    const { data } = await api.put<IDepartment>(`/departments/${id}`, userData)

    return data
  }

  /**
   * PATCH /departments/{id}
   */
  async partialUpdate(id: string, userData: Partial<IDepartment>): Promise<IDepartment> {
    const { data } = await api.patch<IDepartment>(`/departments/${id}`, userData)

    return data
  }

  /**
   * DELETE /departments/{id}
   */
  async delete(id: string): Promise<void> {
    await api.delete(`/departments/${id}`)
  }
}

export const departmentService = new DepartmentService()
