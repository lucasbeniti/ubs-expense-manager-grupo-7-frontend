'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { PencilIcon } from 'lucide-react'
import { IExpense } from '../types'
import ExpenseUpsertDialog from './expense-upsert-dialog'

interface UpdateExpenseButtonProps {
  expense: IExpense
}

const UpdateExpenseButton = ({ expense }: UpdateExpenseButtonProps) => {
  const [open, setOpen] = useState(false)

  // Mock data - em produção viriam de props ou context
  const categories = [
    { id: '1', name: 'Alimentação' },
    { id: '2', name: 'Transporte' },
    { id: '3', name: 'Saúde' },
    { id: '4', name: 'Educação' },
  ]

  const employees = [
    { id: '1', name: 'João Silva' },
    { id: '2', name: 'Maria Santos' },
    { id: '3', name: 'Pedro Oliveira' },
    { id: '4', name: 'Ana Costa' },
  ]

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <PencilIcon className="h-4 w-4" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>Editar despesa</TooltipContent>
      </Tooltip>

      <ExpenseUpsertDialog
        open={open}
        onOpenChange={setOpen}
        categories={categories}
        employees={employees}
        defaultValues={{
          id: expense.id,
          amount: expense.amount,
          date: expense.date,
          description: expense.description,
          category_id: expense.category_id,
          employee_id: expense.employee_id,
          status: expense.status,
          receipt_url: expense.receipt_url,
        }}
      />
    </>
  )
}

export default UpdateExpenseButton