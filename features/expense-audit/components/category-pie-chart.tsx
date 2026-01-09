'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExpenseByCategory } from '../types'

interface CategoryPieChartProps {
  data: ExpenseByCategory[]
  totalExpenses: number
}

const formatCurrency = (value?: number) =>
  typeof value === 'number'
    ? value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : ''

const CategoryPieChart = ({ data, totalExpenses }: CategoryPieChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Despesas por Categoria</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ percent }) => percent !== undefined ? `${(percent * 100).toFixed(0)}%` : '' }
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={formatCurrency} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <div className="text-center mt-4">
          <div className="text-3xl font-bold">
            {formatCurrency(totalExpenses)}
          </div>
          <div className="text-sm text-muted-foreground">(3.200,00)</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CategoryPieChart
