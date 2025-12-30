import { api } from '@/lib/utils/api'
import { LoginPayload } from './types'

export async function login(payload: LoginPayload) {
  const { data } = await api.post('/login', payload)
  return data.user
}

export async function logout() {
  await api.post('/logout')
}
