'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import DepartmentUpsertDialog from './department-upsert-dialog'

const CreateDepartmentButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button className="rounded-full" onClick={() => setOpen(true)}>
        <PlusIcon className="size-4" />
        Adicionar departamento
      </Button>

      <DepartmentUpsertDialog open={open} onOpenChange={setOpen} />
    </>
  )
}

export default CreateDepartmentButton
