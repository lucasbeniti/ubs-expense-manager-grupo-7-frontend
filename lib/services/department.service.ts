import { api } from '@/lib/utils/api'
import { IDepartment, CreateDepartmentDTO, UpdateDepartmentDTO } from '../types/department'

class DepartmentService {
  private getOptions(token?: string) {
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {}
  }

  async getAll(token?: string): Promise<IDepartment[]> {
    const { data } = await api.get<IDepartment[]>('/departments', this.getOptions(token))
    return data
  }

  async getById(id: string, token?: string): Promise<IDepartment> {
    const { data } = await api.get<IDepartment>(`/departments/${id}`, this.getOptions(token))
    return data
  }

  async create(data: CreateDepartmentDTO, token?: string): Promise<IDepartment> {
    const response = await api.post<IDepartment>('/departments', data, this.getOptions(token))
    return response.data
  }

  async update(id: string, data: UpdateDepartmentDTO, token?: string): Promise<IDepartment> {
    const response = await api.put<IDepartment>(`/departments/${id}`, data, this.getOptions(token))
    return response.data
  }

  async delete(id: string, token?: string): Promise<void> {
    await api.delete(`/departments/${id}`, this.getOptions(token))
  }
}

export const departmentService = new DepartmentService()
