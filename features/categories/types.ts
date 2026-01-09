export interface ICategory {
  category_id: string
  name: string
  daily_limit: number
  monthly_limit: number
  created_at: string
}

export interface CreateCategoryDto {
  name: string
  daily_limit: number
  monthly_limit: number
}

export interface UpdateCategoryDto {
  name?: string
  daily_limit?: number
  monthly_limit?: number
}
