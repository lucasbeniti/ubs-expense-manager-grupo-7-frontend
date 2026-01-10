'use client'

import { Pie, PieChart, Cell } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { CategoryExpenseChartItem } from '../types'
import { formatCurrencyToBRL } from '@/lib/utils/currency'

interface Props {
  expenses: CategoryExpenseChartItem[]
}

export const CategoryExpensesChart = ({ expenses }: Props) => {
  const COLORS = [
    'var(--chart-1)',
    'var(--chart-2)',
    'var(--chart-3)',
    'var(--chart-4)',
    'var(--chart-5)',
  ]

  const chartConfig: ChartConfig = {
    total: { label: 'Total' },
    ...expenses.reduce((acc, item, index) => {
      acc[item.name] = {
        label: item.name,
        color: COLORS[index % COLORS.length],
      }
      return acc
    }, {} as ChartConfig),
  }

  const chartData = expenses.map((item, index) => ({
    name: item.name,
    total: item.total,
    label: item.name,
    fill: COLORS[index % COLORS.length],
  }))

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gastos por categoria</CardTitle>
        <CardDescription>Distribuição por categoria</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[360px]">
          <PieChart>
            <Pie data={chartData} dataKey="total" nameKey="name">
              {chartData.map((entry) => (
                <Cell key={entry.name} fill={entry.fill} />
              ))}
            </Pie>

            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelKey="label"
                  formatter={(value) => `Gasto: ${formatCurrencyToBRL(Number(value))}`}
                />
              }
            />

            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
