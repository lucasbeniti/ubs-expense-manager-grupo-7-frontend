export interface IDepartment {
  department_id: string
  name: string
  monthly_budget: number
  created_at: string
}

export interface CreateDepartmentDto {
  name: string
  monthly_budget: number
}

export interface UpdateDepartmentDto {
  name?: string
  monthly_budget?: number
}
