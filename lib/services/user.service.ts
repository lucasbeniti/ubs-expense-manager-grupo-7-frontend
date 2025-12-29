import { api } from '@/lib/utils/api'
import { IUser, CreateUserDTO, UpdateUserDTO } from '../types/user'

class UserService {
  async getAll(): Promise<IUser[]> {
    const { data } = await api.get<IUser[]>('/users')

    return data
  }

  async getById(id: string): Promise<IUser> {
    const { data } = await api.get<IUser>(`/users/${id}`)

    return data
  }

  async create(userData: CreateUserDTO): Promise<IUser> {
    const { data } = await api.post<IUser>('/users', userData)

    return data
  }

  async update(id: string, userData: UpdateUserDTO): Promise<IUser> {
    const { data } = await api.put<IUser>(`/users/${id}`, userData)

    return data
  }

  async partialUpdate(id: string, userData: UpdateUserDTO): Promise<IUser> {
    const { data } = await api.patch<IUser>(`/users/${id}`, userData)

    return data
  }

  async delete(id: string): Promise<void> {
    await api.delete(`/users/${id}`)
  }
}

export const userService = new UserService()
