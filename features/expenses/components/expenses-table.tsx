'use client'

import { DataTable } from '@/components/ui/data-table'
import { IExpense } from '../types'
import { ICategory } from '@/features/categories/types'
import CreateExpenseButton from './create-expense-button'
import { ICurrency } from '@/features/currencies/types'
import { expenseColumns } from './expense-columns'

interface ExpensesTableProps {
  expenses: IExpense[]
  categories: ICategory[]
  currencies: ICurrency[]
}

export default function ExpensesTable({ expenses, categories, currencies }: ExpensesTableProps) {
  return (
    <DataTable
      data={expenses}
      columns={expenseColumns}
      actions={<CreateExpenseButton categories={categories} currencies={currencies} />}
    />
  )
}
