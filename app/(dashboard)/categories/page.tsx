import { DataTable } from '@/components/ui/data-table'
import CreateCategoryButton from '../../../features/categories/components/create-category-button'
import { categoryColumns } from '../../../features/categories/components/category-columns'
import { getCategories } from '@/features/categories/api'
import { apiServer } from '@/lib/http/api-server'

const CategoriesPage = async () => {
  const fetcher = await apiServer()
  const categories = await getCategories(fetcher)

  return (
    <div className="p-6">
      <DataTable columns={categoryColumns} data={categories} actions={<CreateCategoryButton />} />
    </div>
  )
}

export default CategoriesPage
