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
import { userService } from '@/lib/services/user.service'
import { UserFormData, userSchema } from '@/lib/schemas/user.schema'
import { Separator } from '@/components/ui/separator'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { Loader2Icon } from 'lucide-react'
import { USER_ROLE_LABELS } from '@/constants/user'
import { IDepartment } from '@/lib/types/department'
import { IUser } from '@/lib/types/user'

interface UserUpsertDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  departments: IDepartment[]
  managers: IUser[]
  defaultValues?: {
    id: string
    name: string
    email: string
    role: 'employee' | 'manager' | 'finance'
    department_id: string
    manager_id?: string
  }
}

const UserUpsertDialog = ({
  open,
  onOpenChange,
  departments,
  managers,
  defaultValues,
}: UserUpsertDialogProps) => {
  const router = useRouter()

  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: defaultValues?.name ?? '',
      email: defaultValues?.email ?? '',
      role: defaultValues?.role ?? 'employee',
      department_id: defaultValues?.department_id ?? '',
      manager_id: defaultValues?.manager_id ?? '',
    },
  })

  const isEditing = !!defaultValues
  const [isPending, startTransition] = useTransition()

  async function onSubmit(data: UserFormData) {
    const payload = {
      ...data,
      manager_id: data.manager_id === 'none' ? undefined : data.manager_id,
    }
    startTransition(async () => {
      try {
        if (isEditing) {
          await userService.update(defaultValues!.id, payload)
          toast.success('Usuário atualizado com sucesso.')
        } else {
          await userService.create(payload)
          toast.success('Usuário criado com sucesso.')
        }

        form.reset()
        onOpenChange(false)
        router.refresh()
      } catch (error) {
        console.error(error)
        toast.error('Erro ao salvar usuário.')
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Atualizar' : 'Adicionar'} usuário</DialogTitle>
          <DialogDescription>
            Insira os dados abaixo para efetuar a {isEditing ? 'atualização do' : 'criação de um'}{' '}
            usuário
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
                    <Input placeholder="Nome do usuário" {...field} />
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
                    <Input type="email" placeholder="E-mail do usuário" {...field} />
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
                      <SelectItem value="employee">{USER_ROLE_LABELS.employee}</SelectItem>
                      <SelectItem value="manager">{USER_ROLE_LABELS.manager}</SelectItem>
                      <SelectItem value="finance">{USER_ROLE_LABELS.finance}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="department_id"
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
                        <SelectItem key={department.id} value={department.id}>
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
              name="manager_id"
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
                      <SelectItem value="none">Nenhum</SelectItem>

                      {managers.map((manager) => (
                        <SelectItem key={manager.id} value={manager.id}>
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

export default UserUpsertDialog
