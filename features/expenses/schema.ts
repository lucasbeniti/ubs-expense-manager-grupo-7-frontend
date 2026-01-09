import { z } from 'zod'

export const expenseSchema = z.object({
  description: z.string().min(1, 'Descrição é obrigatória'),
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
  receipt_url: z.string().min(1, 'URL da nota fiscal é obrigatória'),
})

export type ExpenseFormData = z.infer<typeof expenseSchema>
