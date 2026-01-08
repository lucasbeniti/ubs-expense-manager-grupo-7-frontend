'use client'

import { useState, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

interface CreateButtonProps {
  entity: string
  dialog: (props: { open: boolean; onOpenChange: (open: boolean) => void }) => ReactNode
}

export function CreateButton({ entity, dialog }: CreateButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        {`Adicionar ${entity}`}
        <PlusIcon className="size-4" />
      </Button>

      {dialog({ open, onOpenChange: setOpen })}
    </>
  )
}
