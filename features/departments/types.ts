export interface IDepartment {
  department_id: string
  name: string
  monthly_budget: number
  created_at: string
}

export interface CreateDepartmentDTO {
  name: string
  monthly_budget: number
}

export interface UpdateDepartmentDTO {
  name?: string
  monthly_budget?: number
}
