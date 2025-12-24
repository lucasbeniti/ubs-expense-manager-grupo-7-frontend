'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Loader2Icon } from 'lucide-react'
import { toast } from 'sonner'
import { login } from '@/services/auth.service'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

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
      const response = await login(data)

      localStorage.setItem('token', response.token)

      router.push('/users')

      toast.success('Bem vindo!')
    } catch {
      toast.error('E-mail ou senha inválidos')
    }
  }

  return (
    <main className="bg-muted flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-4xl overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between p-6 md:p-8"
          >
            <FieldGroup>
              <div className="text-center">
                <h1 className="text-2xl font-bold">Bem vindo!</h1>
                <p className="text-muted-foreground">Acesse a sua conta UBS Expense Manager</p>
              </div>

              <Field>
                <FieldLabel htmlFor="email">E-mail</FieldLabel>
                <Input id="email" type="email" {...register('email')} />
                <div className="h-4">
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Senha</FieldLabel>
                <Input id="password" type="password" {...register('password')} />
                <div className="h-4">
                  {errors.password && (
                    <p className="text-xs text-red-500">{errors.password.message}</p>
                  )}
                </div>
              </Field>
            </FieldGroup>

            <Button type="submit" disabled={isSubmitting} className="mt-6">
              {isSubmitting && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
              Entrar
            </Button>
          </form>

          <div className="relative hidden md:block">
            <Image
              src="/ubs-logo.webp"
              alt="UBS Expense Manager"
              fill
              className="object-cover"
              priority
            />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
