'use client'

import { CreateButton } from '@/components/shared/create-button'
import { ICurrency } from '@/features/currencies/types'
import { ICategory } from '@/features/categories/types'
import { IEmployee } from '@/features/employees/types'
import ExpenseCreateDialog from './expense-create-dialog'

interface CreateExpenseButtonProps {
  currencies: ICurrency[]
  categories: ICategory[]
  employees: IEmployee[]
}

const CreateExpenseButton = ({ currencies, categories, employees }: CreateExpenseButtonProps) => {
  return (
    <CreateButton
      entity="despesa"
      dialog={({ open, onOpenChange }) => (
        <ExpenseCreateDialog
          open={open}
          onOpenChange={onOpenChange}
          categories={categories}
          currencies={currencies}
          employees={employees}
        />
      )}
    />
  )
}

export default CreateExpenseButton
