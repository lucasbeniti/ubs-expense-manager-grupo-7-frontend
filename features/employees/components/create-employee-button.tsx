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
      <Button className="rounded-full" onClick={() => setOpen(true)}>
        <PlusIcon className="size-4" />
        Adicionar funcionário
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
