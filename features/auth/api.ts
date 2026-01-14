import { api } from '@/lib/http/api'
import { LoginPayload } from './types'

export const login = async (payload: LoginPayload) => {
  const { data } = await api.post('/auth/login', payload)

  return data
}

export const logout = async () => {
  await api.post('/logout')
}
