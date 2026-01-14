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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { Loader2Icon } from 'lucide-react'
import { IDepartment } from '@/features/departments/types'
import { EEmployeeRole, IEmployee } from '../types'
import { EMPLOYEE_ROLE_STYLES } from '../constants'
import { EmployeeFormData, employeeSchema } from '../schema'
import { createEmployee, updateEmployee } from '../api'
import { formatCPF } from '@/lib/utils/cpf'

interface EmployeeUpsertDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  departments: IDepartment[]
  managers: IEmployee[]
  defaultValues?: {
    id: string
    name: string
    cpf: string
    email: string
    role: EEmployeeRole
    departmentId: string
    managerId: string
  }
}

const EmployeeUpsertDialog = ({
  open,
  onOpenChange,
  departments,
  managers,
  defaultValues,
}: EmployeeUpsertDialogProps) => {
  const router = useRouter()

  const form = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      name: defaultValues?.name ?? '',
      email: defaultValues?.email ?? '',
      cpf: defaultValues?.cpf ?? '',
      role: defaultValues?.role ?? EEmployeeRole.EMPLOYEE,
      departmentId: defaultValues?.departmentId ? String(defaultValues.departmentId) : undefined,
      managerId: defaultValues?.managerId ? String(defaultValues.managerId) : undefined,
    },
  })

  const isEditing = !!defaultValues
  const [isPending, startTransition] = useTransition()

  async function onSubmit(data: EmployeeFormData) {
    startTransition(async () => {
      try {
        if (isEditing) {
          await updateEmployee(defaultValues!.id, { ...data, cpf: data.cpf.replace(/\D/g, '') })
          toast.success('Funcionário atualizado com sucesso!')
        } else {
          await createEmployee({ ...data, cpf: data.cpf.replace(/\D/g, '') })
          toast.success('Funcionário criado com sucesso!')
        }

        form.reset()
        onOpenChange(false)
        router.refresh()
      } catch (error) {
        console.error(error)
        toast.error('Erro ao salvar funcionário.')
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Atualizar' : 'Adicionar'} funcionário</DialogTitle>
          <DialogDescription>
            Insira os dados abaixo para efetuar a {isEditing ? 'atualização do' : 'criação de um'}{' '}
            funcionário
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
                    <Input placeholder="Nome do funcionário" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="E-mail do funcionário" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="CPF do funcionário"
                      value={field.value ?? ''}
                      onChange={(e) => {
                        const formatted = formatCPF(e.target.value)
                        field.onChange(formatted)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cargo</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um cargo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(EEmployeeRole).map((role) => (
                        <SelectItem key={role} value={role}>
                          {EMPLOYEE_ROLE_STYLES[role].label}
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
              name="departmentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Departamento</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um departamento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {departments.map((department) => (
                        <SelectItem key={department.id} value={String(department.id)}>
                          {department.name}
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
              name="managerId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gestor</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um gestor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {managers.map((manager) => (
                        <SelectItem key={manager.id} value={String(manager.id)}>
                          {manager.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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

export default EmployeeUpsertDialog
