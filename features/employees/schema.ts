import { z } from 'zod'
import { EEmployeeRole } from './types'

export const employeeSchema = z.object({
  name: z.string().trim().min(1, { error: 'Nome é obrigatório' }),
  email: z.email({ error: 'E-mail inválido' }).trim().min(1, { error: 'E-mail é obrigatório' }),
  cpf: z.string().trim().min(1, { error: 'CPF é obrigatório' }),
  role: z.enum(EEmployeeRole, {
    error: 'Cargo é obrigatório',
  }),
  departmentId: z
    .string({
      error: 'Departamento é obrigatório',
    })
    .trim()
    .min(1, {
      error: 'Departamento é obrigatório',
    }),
  managerId: z.string().optional(),
})

export type EmployeeFormData = z.infer<typeof employeeSchema>
