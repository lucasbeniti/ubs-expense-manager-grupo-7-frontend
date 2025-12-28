'use client'

import { useState } from 'react'
import { Trash2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { DeleteUserDialog } from './delete-user-dialog'
import { IUser } from '@/types/user'

interface DeleteUserButtonProps {
  user: IUser
}

const DeleteUserButton = ({ user }: DeleteUserButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Trash2Icon className="h-4 w-4" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>Deletar usuário</TooltipContent>
      </Tooltip>

      <DeleteUserDialog open={open} onOpenChange={setOpen} user={user} />
    </>
  )
}

export default DeleteUserButton
