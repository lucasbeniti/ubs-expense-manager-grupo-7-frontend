import { z } from 'zod'

export const loginSchema = z.object({
  login: z
    .string()
    .min(1, {
      error: 'E-mail é obrigatório',
    })
    .email({
      error: 'E-mail inválido',
    }),
  password: z
    .string()
    .min(1, 'Senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

export type LoginFormData = z.infer<typeof loginSchema>
