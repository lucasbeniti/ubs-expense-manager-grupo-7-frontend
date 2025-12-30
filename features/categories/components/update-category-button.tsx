'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { PencilIcon } from 'lucide-react'
import { ICategory } from '@/lib/types/category'
import CategoryUpsertDialog from './category-upsert-dialog'

interface UpdateCategoryButtonProps {
  category: ICategory
}

const UpdateCategoryButton = ({ category }: UpdateCategoryButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <PencilIcon className="h-4 w-4" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>Editar categoria</TooltipContent>
      </Tooltip>

      <CategoryUpsertDialog
        open={open}
        onOpenChange={setOpen}
        defaultValues={{
          id: category.id,
          name: category.name,
          daily_limit: category.daily_limit,
          monthly_limit: category.monthly_limit,
        }}
      />
    </>
  )
}

export default UpdateCategoryButton
