export interface ICategory {
  category_id: string
  name: string
  daily_limit: number
  monthly_limit: number
  created_at: string
}

export interface CreateCategoryDTO {
  name: string
  daily_limit: number
  monthly_limit: number
}

export interface UpdateCategoryDTO {
  name?: string
  daily_limit?: number
  monthly_limit?: number
}
