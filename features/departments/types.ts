export interface IDepartment {
  id: string
  name: string
  monthlyBudget: number
  createdAt: string
}

export interface CreateDepartmentDto {
  name: string
  monthlyBudget: number
}

export interface UpdateDepartmentDto {
  name?: string
  monthlyBudget?: number
}
