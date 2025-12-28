'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { IUser } from '@/types/user'
import { Loader2Icon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { deleteUser } from '../_services/user.service'

interface DeleteUserDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: IUser | null
}

export function DeleteUserDialog({ open, onOpenChange, user }: DeleteUserDialogProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDeleteClick = async () => {
    if (!user) {
      return
    }

    try {
      setIsLoading(true)

      await deleteUser(user.id)

      toast.success('Usuário deletado com sucesso')
      onOpenChange(false)
    } catch (error) {
      console.error(error)

      toast.error('Erro ao deletar usuário')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deletar usuário</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja deletar o usuário <strong>{user?.name}</strong>? Essa ação não
            pode ser desfeita.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
            Cancelar
          </Button>

          <Button variant="destructive" onClick={handleDeleteClick} disabled={isLoading}>
            {isLoading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
            Deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
