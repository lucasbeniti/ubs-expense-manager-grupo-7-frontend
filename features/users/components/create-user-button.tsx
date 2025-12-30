'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import UserUpsertDialog from './user-upsert-dialog'
import { IDepartment } from '@/lib/types/department'
import { IUser } from '@/lib/types/user'

interface CreateUserButtonProps {
  departments: IDepartment[]
  managers: IUser[]
}

const CreateUserButton = ({ departments, managers }: CreateUserButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button className="rounded-full" onClick={() => setOpen(true)}>
        <PlusIcon className="size-4" />
        Adicionar usuário
      </Button>

      <UserUpsertDialog
        open={open}
        onOpenChange={setOpen}
        departments={departments}
        managers={managers}
      />
    </>
  )
}

export default CreateUserButton
