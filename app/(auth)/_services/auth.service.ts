import { api } from '@/lib/api'

interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  token: string
  user: {
    id: number
    name: string
    email: string
  }
}

export async function login({ email, password }: LoginRequest): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/login', {
    email,
    password,
  })

  return response.data
}
