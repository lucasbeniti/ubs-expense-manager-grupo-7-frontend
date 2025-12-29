import { api } from '@/lib/utils/api'
import { IUser } from '@/lib/types/user'

class UserService {
  /**
   * GET /users
   */
  async getAll(): Promise<IUser[]> {
    const { data } = await api.get<IUser[]>('/users')

    return data
  }

  /**
   * GET /users/{id}
   */
  async getById(id: string): Promise<IUser> {
    const { data } = await api.get<IUser>(`/users/${id}`)

    return data
  }

  /**
   * POST /users
   */
  async create(userData: Omit<IUser, 'id'>): Promise<IUser> {
    const { data } = await api.post<IUser>('/users', userData)

    return data
  }

  /**
   * PUT /users/{id}
   */
  async update(id: string, userData: Partial<IUser>): Promise<IUser> {
    const { data } = await api.put<IUser>(`/users/${id}`, userData)

    return data
  }

  /**
   * PATCH /users/{id}
   */
  async partialUpdate(id: string, userData: Partial<IUser>): Promise<IUser> {
    const { data } = await api.patch<IUser>(`/users/${id}`, userData)

    return data
  }

  /**
   * DELETE /users/{id}
   */
  async delete(id: string): Promise<void> {
    await api.delete(`/users/${id}`)
  }
}

export const userService = new UserService()
