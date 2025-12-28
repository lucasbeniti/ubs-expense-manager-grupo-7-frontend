'use client'

import { useState } from 'react'
import { Trash2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { DeleteDepartmentDialog } from './delete-department-dialog'
import { IDepartment } from '@/types/department'

interface DeleteDepartmentButtonProps {
  department: IDepartment
}

const DeleteDepartmentButton = ({ department }: DeleteDepartmentButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Trash2Icon className="h-4 w-4" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>Deletar departamento</TooltipContent>
      </Tooltip>

      <DeleteDepartmentDialog open={open} onOpenChange={setOpen} department={department} />
    </>
  )
}

export default DeleteDepartmentButton
