'use client'

import EmployeeUpsertDialog from './employee-upsert-dialog'
import { IDepartment } from '@/features/departments/types'
import { IEmployee } from '../types'
import { CreateButton } from '@/components/shared/create-button'

interface CreateEmployeeButtonProps {
  departments: IDepartment[]
  managers: IEmployee[]
}

const CreateEmployeeButton = ({ departments, managers }: CreateEmployeeButtonProps) => {
  return (
    <CreateButton
      entity="funcionário"
      dialog={({ open, onOpenChange }) => (
        <EmployeeUpsertDialog
          open={open}
          onOpenChange={onOpenChange}
          departments={departments}
          managers={managers}
        />
      )}
    />
  )
}

export default CreateEmployeeButton
