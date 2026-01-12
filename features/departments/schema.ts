import { z } from 'zod'

export const departmentSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  monthlyBudget: z
    .number({
      error: 'Orçamento mensal deve ser um número',
    })
    .min(0, {
      error: 'Orçamento mensal deve ser positivo',
    }),
})

export type DepartmentFormData = z.infer<typeof departmentSchema>
