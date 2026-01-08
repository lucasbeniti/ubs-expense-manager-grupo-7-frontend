'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { PencilIcon } from 'lucide-react'
import { IEmployee } from '../types'
import { IDepartment } from '@/features/departments/types'
import EmployeeUpsertDialog from './employee-upsert-dialog'

interface UpdateEmployeeButtonProps {
  employee: IEmployee
  departments: IDepartment[]
  managers: IEmployee[]
}

const UpdateEmployeeButton = ({ employee, departments, managers }: UpdateEmployeeButtonProps) => {
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

      <EmployeeUpsertDialog
        open={open}
        onOpenChange={setOpen}
        departments={departments}
        managers={managers}
        defaultValues={{
          id: employee.id,
          name: employee.name,
          email: employee.email,
          role: employee.role,
          fk_department_id: employee.department.id,
          fk_manager_id: employee.manager?.id ?? '',
        }}
      />
    </>
  )
}

export default UpdateEmployeeButton
