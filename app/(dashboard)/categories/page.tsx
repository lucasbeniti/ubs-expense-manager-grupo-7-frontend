import { DataTable } from '@/components/ui/data-table'
import CreateCategoryButton from '../../../features/categories/components/create-category-button'
import { categoryColumns } from '../../../features/categories/components/category-columns'
import { getCategories } from '@/features/categories/api'

const CategoriesPage = async () => {
  const categories = await getCategories()

  return (
    <>
      <div className="p-6">
        <DataTable
          columns={categoryColumns}
          data={categories}
          createButton={<CreateCategoryButton />}
        />
      </div>
    </>
  )
}

export default CategoriesPage
