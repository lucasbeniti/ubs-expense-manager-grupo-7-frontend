'use client'

import { CheckCheckIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { updateAlertStatus } from '../api'

interface AlertResolveButtonProps {
  id: string
}

const AlertResolveButton = ({ id }: AlertResolveButtonProps) => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleResolve = async () => {
    try {
      setIsLoading(true)

      await updateAlertStatus(id)

      toast.success('Alerta resolvido com sucesso!')
      setOpen(false)
      router.refresh()
    } catch (error) {
      console.error(error)
      toast.error('Erro ao resolver alerta.')
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
            className="text-green-600 hover:text-green-700"
            onClick={() => !isLoading && setOpen(true)}
            disabled={isLoading}
          >
            <CheckCheckIcon className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Resolver alerta</TooltipContent>
      </Tooltip>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Resolver alerta</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja marcar este alerta como <strong>resolvido</strong>? Esta ação
              não poderá ser desfeita.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" disabled={isLoading}>
                Cancelar
              </Button>
            </DialogClose>

            <Button
              onClick={handleResolve}
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-600/90"
            >
              {isLoading ? 'Resolvendo...' : 'Confirmar'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AlertResolveButton
