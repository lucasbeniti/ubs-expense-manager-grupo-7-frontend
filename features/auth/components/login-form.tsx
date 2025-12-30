'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Loader2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { loginSchema, LoginFormData } from '../schemas'
import { useAuth } from '../hooks/use-login'

export function LoginForm() {
  const { signIn } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className="w-full max-w-md p-0">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit(signIn)}>
          <FieldGroup>
            <div className="text-center">
              <h1 className="text-2xl font-bold">Bem-vindo!</h1>
              <p className="text-muted-foreground">Acesse sua conta UBS Expense Manager</p>
            </div>

            <Field>
              <FieldLabel htmlFor="email">E-mail</FieldLabel>
              <Input id="email" type="email" autoFocus {...register('email')} />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Senha</FieldLabel>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
            </Field>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
              Entrar
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
