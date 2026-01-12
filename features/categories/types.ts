export interface ICategory {
  id: string
  name: string
  dailyLimit: number
  monthlyLimit: number
  createdAt: string
}

export interface CreateCategoryDto {
  name: string
  dailyLimit: number
  monthlyLimit: number
}

export interface UpdateCategoryDto {
  name?: string
  dailyLimit?: number
  monthlyLimit?: number
}
