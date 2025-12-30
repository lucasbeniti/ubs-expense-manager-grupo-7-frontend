'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import CategoryUpsertDialog from './category-upsert-dialog'

const CreateCategoryButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button className="rounded-full" onClick={() => setOpen(true)}>
        <PlusIcon className="size-4" />
        Adicionar categoria
      </Button>

      <CategoryUpsertDialog open={open} onOpenChange={setOpen} />
    </>
  )
}

export default CreateCategoryButton
