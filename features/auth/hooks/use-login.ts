'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { login, logout } from '../api'
import { LoginFormData } from '../schemas'

export const useAuth = () => {
  const router = useRouter()

  const signIn = async (data: LoginFormData) => {
    try {
      await login(data)
      toast.success('Bem-vindo!')
      router.push('/employees')
    } catch {
      toast.error('E-mail ou senha inválidos')
      throw new Error('Login failed')
    }
  }

  const signOut = async () => {
    try {
      await logout()
    } finally {
      router.push('/login')
      toast.success('Logout realizado')
    }
  }

  return { signIn, signOut }
}
