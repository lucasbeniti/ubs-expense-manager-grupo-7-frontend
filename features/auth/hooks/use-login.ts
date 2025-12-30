'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { login } from '../api'
import { LoginFormData } from '../schemas'

export function useLogin() {
  const router = useRouter()

  const signIn = async (data: LoginFormData) => {
    try {
      await login(data)
      router.push('/users')
      toast.success('Bem-vindo!')
    } catch {
      toast.error('E-mail ou senha inválidos')
      throw new Error('Login failed')
    }
  }

  return { signIn }
}
