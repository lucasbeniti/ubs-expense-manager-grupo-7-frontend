'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import AuditFilters from '@/features/expense-audit/components/audit-filters'
import CategoryPieChart from '@/features/expense-audit/components/category-pie-chart'
import DepartmentBarChart from '@/features/expense-audit/components/department-bar-chart'
import ApprovalSummary from '@/features/expense-audit/components/approval-summary'
import { getAuditDashboardData } from '@/features/expense-audit/api'
import { getEmployees } from '@/features/employees/api'
import { getDepartments } from '@/features/departments/api'
import { AuditDashboardData, AuditFilters as AuditFiltersType } from '@/features/expense-audit/types'
import { IEmployee } from '@/features/employees/types'
import { IDepartment } from '@/features/departments/types'

const ExpenseAuditLogsPage = () => {
  const [data, setData] = useState<AuditDashboardData | null>(null)
  const [employees, setEmployees] = useState<IEmployee[]>([])
  const [departments, setDepartments] = useState<IDepartment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadInitialData()
  }, [])

  const loadInitialData = async () => {
    try {
      const [auditData, employeesData, departmentsData] = await Promise.all([
        getAuditDashboardData(),
        getEmployees(),
        getDepartments(),
      ])
      setData(auditData)
      setEmployees(employeesData)
      setDepartments(departmentsData)
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilter = async (filters: AuditFiltersType) => {
    setLoading(true)
    try {
      const auditData = await getAuditDashboardData(filters)
      setData(auditData)
    } catch (error) {
      console.error('Error filtering data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading || !data) {
    return <div className="p-6">Carregando...</div>
  }

  return (
    <div className="p-6 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
        <Input
          placeholder="Buscar..."
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <AuditFilters
        employees={employees}
        departments={departments}
        onFilter={handleFilter}
      />

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="lg:col-span-1">
          <CategoryPieChart
            data={data.expensesByCategory}
            totalExpenses={data.totalExpenses}
          />
        </div>

        {/* Bar Chart */}
        <div className="lg:col-span-1">
          <DepartmentBarChart data={data.expensesByDepartment} />
        </div>

        {/* Approval Summary */}
        <div className="lg:col-span-1">
          <ApprovalSummary data={data.approvalSummary} />
        </div>
      </div>
    </div>
  )
}

export default ExpenseAuditLogsPage