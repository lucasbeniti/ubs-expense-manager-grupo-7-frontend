import { api } from '@/lib/utils/api'
import { IUser, CreateUserDTO, UpdateUserDTO } from './types'

export async function getUsers(): Promise<IUser[]> {
  const { data } = await api.get<IUser[]>('/users')
  return data
}

export async function getUserById(id: string): Promise<IUser> {
  const { data } = await api.get<IUser>(`/users/${id}`)
  return data
}

export async function createUser(payload: CreateUserDTO): Promise<IUser> {
  const { data } = await api.post<IUser>('/users', payload)
  return data
}

export async function updateUser(id: string, payload: UpdateUserDTO): Promise<IUser> {
  const { data } = await api.put<IUser>(`/users/${id}`, payload)
  return data
}

export async function patchUser(id: string, payload: UpdateUserDTO): Promise<IUser> {
  const { data } = await api.patch<IUser>(`/users/${id}`, payload)
  return data
}

export async function deleteUser(id: string): Promise<void> {
  await api.delete(`/users/${id}`)
}
