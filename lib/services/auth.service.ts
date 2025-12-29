import { api } from '../utils/api'

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

class AuthService {
  async login({ email, password }: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/login', {
      email,
      password,
    })

    return response.data
  }
}

export const authService = new AuthService()
