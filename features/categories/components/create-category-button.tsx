'use client'

import CategoryUpsertDialog from './category-upsert-dialog'
import { CreateButton } from '@/components/shared/create-button'

const CreateCategoryButton = () => {
  return (
    <CreateButton
      entity="categoria"
      dialog={({ open, onOpenChange }) => (
        <CategoryUpsertDialog open={open} onOpenChange={onOpenChange} />
      )}
    />
  )
}

export default CreateCategoryButton
