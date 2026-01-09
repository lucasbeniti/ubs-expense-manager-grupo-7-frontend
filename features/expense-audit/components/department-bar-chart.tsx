'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExpenseByDepartment } from '../types'

const formatCurrency = (value?: number) =>
  typeof value === 'number'
    ? value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : ''

interface DepartmentBarChartProps {
  data: ExpenseByDepartment[]
}

const DepartmentBarChart = ({ data }: DepartmentBarChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Despesas por Departamento</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip formatter={formatCurrency} />
            <Bar dataKey="amount" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default DepartmentBarChart