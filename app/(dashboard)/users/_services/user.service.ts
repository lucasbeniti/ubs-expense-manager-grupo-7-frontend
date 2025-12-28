import { api } from '@/lib/api'
import { IUser } from '@/types/user'

/**
 * GET /users
 */
export async function getUsers(): Promise<IUser[]> {
  const { data } = await api.get<IUser[]>('/users')

  return data
}

/**
 * DELETE /users/{id}
 */
export async function deleteUser(userId: string) {
  await api.delete(`/users/${userId}`)
}
