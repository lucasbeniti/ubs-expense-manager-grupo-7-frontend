'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import EmployeeUpsertDialog from './employee-upsert-dialog'
import { IDepartment } from '@/features/departments/types'
import { IEmployee } from '../types'

interface CreateEmployeeButtonProps {
  departments: IDepartment[]
  managers: IEmployee[]
}

const CreateEmployeeButton = ({ departments, managers }: CreateEmployeeButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Adicionar funcionário
        <PlusIcon className="size-4" />
      </Button>

      <EmployeeUpsertDialog
        open={open}
        onOpenChange={setOpen}
        departments={departments}
        managers={managers}
      />
    </>
  )
}

export default CreateEmployeeButton
