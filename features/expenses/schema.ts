import { z } from 'zod'

export const expenseSchema = z.object({
  description: z
    .string({
      error: 'Descrição é obrigatória',
    })
    .trim()
    .min(1, {
      error: 'Descrição é obrigatória',
    }),
  date: z.date({
    error: 'Data é obrigatória',
  }),
  amount: z
    .number({
      error: 'Valor deve ser um número',
    })
    .min(1, {
      error: 'Valor deve ser positivo',
    }),
  currency_id: z
    .string({
      error: 'Moeda é obrigatória',
    })
    .trim()
    .min(1, {
      error: 'Moeda é obrigatória',
    }),
  employee_id: z
    .string({
      error: 'Funcionário é obrigatório',
    })
    .trim()
    .min(1, {
      error: 'Funcionário é obrigatório',
    }),
  category_id: z
    .string({
      error: 'Categoria é obrigatória',
    })
    .trim()
    .min(1, {
      error: 'Categoria é obrigatória',
    }),
  receipt_url: z
    .instanceof(File, { message: 'Nota fiscal é obrigatória' })
    .refine((f) => f.size > 0, 'Nota fiscal é obrigatória'),
})

export type ExpenseFormData = z.infer<typeof expenseSchema>
