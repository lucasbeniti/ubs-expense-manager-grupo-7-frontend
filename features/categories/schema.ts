import { z } from 'zod'

export const categorySchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  dailyLimit: z
    .number({
      error: 'Limite diário deve ser um número',
    })
    .min(1, {
      error: 'Limite diário deve ser positivo',
    }),
  monthlyLimit: z
    .number({
      error: 'Limite mensal deve ser um número',
    })
    .min(1, {
      error: 'Limite mensal deve ser positivo',
    }),
})

export type CategoryFormData = z.infer<typeof categorySchema>
