'use client'

import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DeleteDialog } from './delete-dialog'
import { useState } from 'react'
import { toast } from 'sonner'
import { capitalize } from '@/_lib/utils/string'

interface DeleteButtonProps {
  id: string
  onDelete: (id: string) => Promise<void>
  entityName?: string
}

export function DeleteButton({ id, onDelete, entityName = 'item' }: DeleteButtonProps) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    try {
      setIsLoading(true)

      await onDelete(id)

      toast.success(`${capitalize(entityName)} excluído com sucesso!`)

      setOpen(false)
    } catch (error) {
      console.error(error)

      toast.error(`Erro ao excluir ${entityName}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
        <Trash2 className="h-4 w-4" />
      </Button>

      <DeleteDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={handleDelete}
        title={`Excluir ${entityName}?`}
        description={`Tem certeza que deseja excluir este ${entityName}? Esta ação não pode ser desfeita.`}
        isLoading={isLoading}
      />
    </>
  )
}
