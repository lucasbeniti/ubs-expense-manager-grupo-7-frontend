import { api } from '@/lib/utils/api'
import { IDepartment, CreateDepartmentDTO, UpdateDepartmentDTO } from '../types/department'

class DepartmentService {
  async getAll(): Promise<IDepartment[]> {
    const { data } = await api.get<IDepartment[]>('/departments')
    return data
  }

  async getById(id: string): Promise<IDepartment> {
    const { data } = await api.get<IDepartment>(`/departments/${id}`)
    return data
  }

  async create(data: CreateDepartmentDTO): Promise<IDepartment> {
    const response = await api.post<IDepartment>('/departments', data)
    return response.data
  }

  async update(id: string, data: UpdateDepartmentDTO): Promise<IDepartment> {
    const response = await api.put<IDepartment>(`/departments/${id}`, data)
    return response.data
  }

  async delete(id: string): Promise<void> {
    await api.delete(`/departments/${id}`)
  }
}

export const departmentService = new DepartmentService()
