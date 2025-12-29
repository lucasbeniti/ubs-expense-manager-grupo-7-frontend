export interface CreateDepartmentDTO {
  name: string
  monthly_budget: number
}

export interface UpdateDepartmentDTO {
  name?: string
  monthly_budget?: number
}
