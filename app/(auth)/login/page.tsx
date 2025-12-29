'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Loader2Icon } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { authService } from '@/lib/services/auth.service'

const loginSchema = z.object({
  email: z.string().min(1, 'E-mail é obrigatório').email('E-mail inválido'),
  password: z
    .string()
    .min(1, 'Senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await authService.login(data)

      localStorage.setItem('token', response.token)
      router.push('/users')

      toast.success('Bem-vindo!')
    } catch {
      toast.error('E-mail ou senha inválidos')
    }
  }

  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="bg-muted flex items-center justify-center px-4">
        <Card className="w-full max-w-md p-0">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Bem-vindo!</h1>
                  <p className="text-muted-foreground">Acesse sua conta UBS Expense Manager</p>
                </div>

                <Field>
                  <FieldLabel htmlFor="email">E-mail</FieldLabel>
                  <Input id="email" type="email" {...register('email')} />

                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <Input id="password" type="password" {...register('password')} />

                  {errors.password && (
                    <p className="text-xs text-red-500">{errors.password.message}</p>
                  )}
                </Field>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
                  Entrar
                </Button>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="relative hidden md:block">
        <Image
          src="/ubs-logo.webp"
          alt="UBS Expense Manager"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  )
}
