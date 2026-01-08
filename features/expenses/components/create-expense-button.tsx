'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import ExpenseUpsertDialog from './expense-upsert-dialog'
import { ICategory } from '@/features/categories/types'
import { IEmployee } from '@/features/employees/types'

interface CreateExpenseButtonProps {
  categories: ICategory[]
  employees: IEmployee[]
}

const CreateExpenseButton = ({ categories, employees }: CreateExpenseButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button className="rounded-full" onClick={() => setOpen(true)}>
        <PlusIcon className="size-4" />
        Adicionar Despesa
      </Button>

      <ExpenseUpsertDialog 
        open={open} 
        onOpenChange={setOpen} 
        categories={categories}
        employees={employees}
      />
    </>
  )
}

export default CreateExpenseButton