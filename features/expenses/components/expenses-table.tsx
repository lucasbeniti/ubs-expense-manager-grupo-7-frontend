'use client'

import { DataTable } from '@/components/ui/data-table'
import { IExpense } from '../types'
import { ICategory } from '@/features/categories/types'
import { IEmployee } from '@/features/employees/types'
import CreateExpenseButton from './create-expense-button'
import { ICurrency } from '@/features/currencies/types'
import { expenseColumns } from './expense-columns'

interface ExpensesTableProps {
  expenses: IExpense[]
  categories: ICategory[]
  employees: IEmployee[]
  currencies: ICurrency[]
}

export default function ExpensesTable({
  expenses,
  categories,
  employees,
  currencies,
}: ExpensesTableProps) {
  return (
    <DataTable
      data={expenses}
      columns={expenseColumns(currencies, categories, employees)}
      actions={
        <CreateExpenseButton
          categories={categories}
          employees={employees}
          currencies={currencies}
        />
      }
    />
  )
}
