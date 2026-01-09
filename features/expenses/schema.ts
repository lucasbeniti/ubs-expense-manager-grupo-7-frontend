import { z } from 'zod'

export const expenseSchema = z.object({
  amount: z
    .number({
      error: 'Valor deve ser um número',
    })
    .min(0.01, {
      error: 'Valor deve ser maior que zero',
    }),
  date: z.string().min(1, 'Data é obrigatória'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  category_id: z.string().min(1, 'Categoria é obrigatória'),
  employee_id: z.string().min(1, 'Funcionário é obrigatório'),
  status: z.enum(['pending', 'approved', 'rejected']),
  receipt_url: z.string().optional(),
})

export type ExpenseFormData = z.infer<typeof expenseSchema>
