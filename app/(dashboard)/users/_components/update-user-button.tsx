'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { PencilIcon } from 'lucide-react'
import UserUpsertDialog from './user-upsert-dialog'
import { IDepartment } from '@/lib/types/department'
import { IUser } from '@/lib/types/user'

interface UpdateUserButtonProps {
  user: IUser
  departments: IDepartment[]
  managers: IUser[]
}

const UpdateUserButton = ({ user, departments, managers }: UpdateUserButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <PencilIcon className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Editar usuário</TooltipContent>
      </Tooltip>

      <UserUpsertDialog
        open={open}
        onOpenChange={setOpen}
        departments={departments}
        managers={managers}
        defaultValues={{
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          department_id: user.department.id,
          manager_id: user.manager?.id,
        }}
      />
    </>
  )
}

export default UpdateUserButton
