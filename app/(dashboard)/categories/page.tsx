import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'
import CreateCategoryButton from '../../../features/categories/components/create-category-button'
import { categoryColumns } from '../../../features/categories/components/category-columns'
import { getCategories } from '@/features/categories/api'

const CategoriesPage = async () => {
  const categories = await getCategories()

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Categorias</h1>

        <CreateCategoryButton />
      </div>

      <Separator />

      <DataTable columns={categoryColumns} data={categories} />
    </div>
  )
}

export default CategoriesPage
