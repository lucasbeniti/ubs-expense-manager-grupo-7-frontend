'use client'

import DepartmentUpsertDialog from './department-upsert-dialog'
import { CreateButton } from '@/components/shared/create-button'

const CreateDepartmentButton = () => {
  return (
    <CreateButton
      entity="departamento"
      dialog={({ open, onOpenChange }) => (
        <DepartmentUpsertDialog open={open} onOpenChange={onOpenChange} />
      )}
    />
  )
}

export default CreateDepartmentButton
