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
import { Separator } from '@/components/ui/separator'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { Loader2Icon } from 'lucide-react'
import { MoneyInput } from '@/components/shared/money-input'
import { DepartmentFormData, departmentSchema } from '../schema'
import { createDepartment, updateDepartment } from '../api'

interface DepartmentUpsertDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultValues?: {
    id: string
    name: string
    monthly_budget: number
  }
}

const DepartmentUpsertDialog = ({
  open,
  onOpenChange,
  defaultValues,
}: DepartmentUpsertDialogProps) => {
  const router = useRouter()
  const form = useForm<DepartmentFormData>({
    resolver: zodResolver(departmentSchema),
    defaultValues: {
      name: defaultValues?.name ?? '',
      monthly_budget: Number(defaultValues?.monthly_budget) ?? 0,
    },
  })

  const isEditing = !!defaultValues
  const [isPending, startTransition] = useTransition()

  async function onSubmit(data: DepartmentFormData) {
    startTransition(async () => {
      try {
        if (isEditing) {
          await updateDepartment(defaultValues!.id, data)

          toast.success('Departamento atualizado com sucesso.')
        } else {
          await createDepartment(data)

          toast.success('Departamento criado com sucesso.')
        }
        form.reset()

        onOpenChange(false)

        router.refresh()
      } catch (error) {
        console.error(error)

        toast.error('Erro ao salvar departamento.')
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Atualizar' : 'Adicionar'} departamento</DialogTitle>
          <DialogDescription>
            Insira os dados abaixo para efetuar a {isEditing ? 'atualização do' : 'criação de um'}{' '}
            departamento
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do departamento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="monthly_budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Orçamento mensal</FormLabel>
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

export default DepartmentUpsertDialog
