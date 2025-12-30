'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { PencilIcon } from 'lucide-react'
import DepartmentUpsertDialog from './department-upsert-dialog'
import { IDepartment } from '@/lib/types/department'

interface UpdateDepartmentButtonProps {
  department: IDepartment
}

const UpdateDepartmentButton = ({ department }: UpdateDepartmentButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <PencilIcon className="h-4 w-4" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>Editar departamento</TooltipContent>
      </Tooltip>

      <DepartmentUpsertDialog
        open={open}
        onOpenChange={setOpen}
        defaultValues={{
          id: department.id,
          name: department.name,
          monthly_budget: department.monthly_budget,
        }}
      />
    </>
  )
}

export default UpdateDepartmentButton
