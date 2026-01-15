'use client'

import { CreateButton } from '@/components/shared/create-button'
import { ICurrency } from '@/features/currencies/types'
import { ICategory } from '@/features/categories/types'
import ExpenseCreateDialog from './expense-create-dialog'

interface CreateExpenseButtonProps {
  currencies: ICurrency[]
  categories: ICategory[]
}

const CreateExpenseButton = ({ currencies, categories }: CreateExpenseButtonProps) => {
  return (
    <CreateButton
      entity="despesa"
      dialog={({ open, onOpenChange }) => (
        <ExpenseCreateDialog
          open={open}
          onOpenChange={onOpenChange}
          categories={categories}
          currencies={currencies}
        />
      )}
    />
  )
}

export default CreateExpenseButton
