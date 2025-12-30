import { api } from '@/lib/http/api'
import { IUser, CreateUserDTO, UpdateUserDTO } from './types'

export const getUsers = async (): Promise<IUser[]> => {
  const { data } = await api.get<IUser[]>('/users')
  return data
}

export const getUserById = async (id: string): Promise<IUser> => {
  const { data } = await api.get<IUser>(`/users/${id}`)
  return data
}

export const createUser = async (payload: CreateUserDTO): Promise<IUser> => {
  const { data } = await api.post<IUser>('/users', payload)
  return data
}

export const updateUser = async (id: string, payload: UpdateUserDTO): Promise<IUser> => {
  const { data } = await api.put<IUser>(`/users/${id}`, payload)
  return data
}

export const deleteUser = async (id: string): Promise<void> => {
  await api.delete(`/users/${id}`)
}
