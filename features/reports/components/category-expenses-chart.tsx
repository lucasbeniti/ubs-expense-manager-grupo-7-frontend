'use client'

import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CategoryExpenseChartItem } from '../types'

const COLORS = ['#2563eb', '#16a34a', '#f59e0b', '#7c3aed', '#dc2626', '#0f766e']

const currency = (v: number) => `R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`

interface Props {
  expenses: CategoryExpenseChartItem[]
}

export const CategoryExpensesChart = ({ expenses }: Props) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gastos por categoria</CardTitle>
        <CardDescription>Distribuição dos gastos</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <div className="mx-auto max-w-[420px]">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={expenses}
                dataKey="total"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={56}
                outerRadius={96}
                paddingAngle={4}
                isAnimationActive={false}
              >
                {expenses.map((entry, index) => (
                  <Cell key={entry.key} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => currency(Number(value))}
                contentStyle={{
                  background: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 8,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
