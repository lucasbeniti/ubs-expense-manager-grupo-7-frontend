'use client'

import { useState, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { PencilIcon } from 'lucide-react'

interface UpdateButtonProps {
  entityName?: string
  children: (open: boolean, setOpen: (open: boolean) => void) => ReactNode
}

export function UpdateButton({ entityName = 'item', children }: UpdateButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            aria-label={`Editar ${entityName}`}
          >
            <PencilIcon className="h-4 w-4" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>Editar {entityName}</TooltipContent>
      </Tooltip>

      {children(open, setOpen)}
    </>
  )
}
