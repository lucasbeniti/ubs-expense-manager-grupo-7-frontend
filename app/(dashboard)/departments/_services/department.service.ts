import { api } from '@/lib/api'
import { IDepartment } from '@/types/department'

/**
 * GET /departments
 */
export async function getDepartments(): Promise<IDepartment[]> {
  const { data } = await api.get<IDepartment[]>('/departments')

  return data
}
