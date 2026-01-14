'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { login } from '../api'
import { LoginFormData } from '../schemas'
import { useAuthContext } from '@/contexts/auth-context'

export const useAuth = () => {
  const router = useRouter()
  const { setUser } = useAuthContext()

  const signIn = async (data: LoginFormData) => {
    try {
      const response = await login(data)

      document.cookie = `token=${response.token}; path=/; max-age=7200; SameSite=Lax`
      document.cookie = `user_role=${response.role}; path=/; max-age=7200; SameSite=Lax`

      setUser({
        name: response.name,
        login: response.login,
        role: response.role,
        employeeId: response.employeeId,
      })

      toast.success('Bem-vindo!')
      router.push('/employees')
    } catch (err: any) {
      toast.error('E-mail ou senha inválidos.')
      console.error(err)
    }
  }

  const signOut = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax'
    document.cookie = 'user_role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax'

    localStorage.clear()
    setUser(null)

    toast.success('Sessão encerrada.')
    router.replace('/login')
  }

  return { signIn, signOut }
}
