import { DataTable } from '@/components/ui/data-table'
import CreateCategoryButton from '../../../features/categories/components/create-category-button'
import { categoryColumns } from '../../../features/categories/components/category-columns'
import { getCategories } from '@/features/categories/api'
import PageHeader from '@/components/shared/page-header'

const CategoriesPage = async () => {
  const categories = await getCategories()

  return (
    <>
      <PageHeader>
        <CreateCategoryButton />
      </PageHeader>

      <div className="p-6">
        <DataTable columns={categoryColumns} data={categories} />
      </div>
    </>
  )
}

export default CategoriesPage
