import { z } from 'zod'

export const userSchema = z.object({
  name: z.string().trim().min(1, { error: 'Nome é obrigatório' }),
  email: z.email({ error: 'E-mail inválido' }).trim().min(1, { error: 'E-mail é obrigatório' }),
  role: z.enum(['employee', 'manager', 'finance'], {
    error: 'Cargo é obrigatório',
  }),
  department_id: z.string().trim().min(1, {
    error: 'Departamento é obrigatório',
  }),
  manager_id: z.string().trim().min(1, {
    error: 'Gestor é obrigatório',
  }),
})

export type UserFormData = z.infer<typeof userSchema>
