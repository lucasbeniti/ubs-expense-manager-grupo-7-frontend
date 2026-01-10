'use client'

import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DeleteDialog } from './delete-dialog'
import { useState } from 'react'
import { toast } from 'sonner'
import { capitalize } from '@/lib/utils/string'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { useRouter } from 'next/navigation'

interface DeleteButtonProps {
  id: string
  onDelete: (id: string) => Promise<void>
  entityName?: string
}

export function DeleteButton({ id, onDelete, entityName = 'item' }: DeleteButtonProps) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    try {
      setIsLoading(true)

      await onDelete(id)

      toast.success(`${capitalize(entityName)} excluído com sucesso!`)

      setOpen(false)
      router.refresh()
    } catch (error) {
      console.error(error)

      toast.error(`Erro ao excluir ${entityName}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              if (!isLoading) {
                setOpen(true)
              }
            }}
            className="text-destructive hover:text-destructive"
            disabled={isLoading}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>Deletar {entityName}</TooltipContent>
      </Tooltip>

      <DeleteDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={handleDelete}
        title={`Deletar ${entityName}?`}
        description={`Tem certeza que deseja deletar ${entityName === 'categoria' ? 'esta' : 'este'} ${entityName}? Esta ação não pode ser desfeita.`}
        isLoading={isLoading}
      />
    </>
  )
}
