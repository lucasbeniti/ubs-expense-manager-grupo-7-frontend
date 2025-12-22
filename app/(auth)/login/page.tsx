'use client'

import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    setIsLoading(true)
  }

  return (
    <main className="bg-muted flex min-h-screen items-center justify-center px-4">
      <div className="flex w-full max-w-4xl flex-col gap-6">
        <Card className="overflow-hidden p-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form onSubmit={handleLogin} className="p-6 md:p-8">
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="text-2xl font-bold">Bem vindo!</h1>
                  <p className="text-muted-foreground text-balance">
                    Acesse a sua conta UBS Expense Manager
                  </p>
                </div>

                <Field>
                  <FieldLabel htmlFor="email">E-mail</FieldLabel>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <Input id="password" type="password" required />
                </Field>

                <Field>
                  <Button type="submit" className="cursor-pointer" disabled={isLoading}>
                    {isLoading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
                    Entrar
                  </Button>
                </Field>
              </FieldGroup>
            </form>

            <div className="bg-muted relative hidden md:block">
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
      </div>
    </main>
  )
}

export default LoginPage
