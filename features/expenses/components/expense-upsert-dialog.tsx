'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { Loader2Icon } from 'lucide-react'
import { MoneyInput } from '@/components/shared/money-input'
import { ExpenseFormData, expenseSchema } from '../schema'
import { createExpense, updateExpense } from '../api'
import { ICategory } from '@/features/categories/types'
import { IEmployee } from '@/features/employees/types'
import { EXPENSE_STATUS_OPTIONS } from '../constants'

interface ExpenseUpsertDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  categories: ICategory[]
  employees: IEmployee[]
  defaultValues?: {
    id: string
    amount: number
    date: string
    description: string
    category_id: string
    employee_id: string
    status: 'pending' | 'approved' | 'rejected'
    receipt_url?: string
  }
}

const ExpenseUpsertDialog = ({
  open,
  onOpenChange,
  categories,
  employees,
  defaultValues,
}: ExpenseUpsertDialogProps) => {
  const router = useRouter()
  const form = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      amount: defaultValues?.amount ?? 0,
      date: defaultValues?.date ?? new Date().toISOString().split('T')[0],
      description: defaultValues?.description ?? '',
      category_id: defaultValues?.category_id ?? '',
      employee_id: defaultValues?.employee_id ?? '',
      status: defaultValues?.status ?? 'pending',
      receipt_url: defaultValues?.receipt_url ?? '',
    },
  })

  const isEditing = !!defaultValues
  const [isPending, startTransition] = useTransition()

  async function onSubmit(data: ExpenseFormData) {
    startTransition(async () => {
      try {
        if (isEditing) {
          await updateExpense(defaultValues!.id, data)
          toast.success('Despesa atualizada com sucesso.')
        } else {
          await createExpense(data)
          toast.success('Despesa criada com sucesso.')
        }
        form.reset()
        onOpenChange(false)
        router.refresh()
      } catch (error) {
        console.error(error)
        toast.error('Erro ao salvar despesa.')
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Atualizar' : 'Adicionar'} Despesa</DialogTitle>
          <DialogDescription>
            Insira os dados abaixo para efetuar a {isEditing ? 'atualização da' : 'criação de uma'}{' '}
            despesa
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="employee_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Funcionário</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um funcionário" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {employees.map((employee) => (
                          <SelectItem key={employee.id} value={employee.id}>
                            {employee.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor</FormLabel>
                    <FormControl>
                      <MoneyInput
                        placeholder="R$ 0,00"
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input placeholder="Descrição da despesa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {EXPENSE_STATUS_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="receipt_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL do Comprovante (Opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancelar
                </Button>
              </DialogClose>

              <Button type="submit" disabled={isPending}>
                {isPending && <Loader2Icon className="size-4 animate-spin" />}
                {isEditing ? 'Atualizar' : 'Adicionar'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ExpenseUpsertDialog