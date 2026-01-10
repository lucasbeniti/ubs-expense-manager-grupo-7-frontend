'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { DepartmentBudgetComparativeChartItem } from '../types'
import { formatCurrencyToBRL } from '@/lib/utils/currency'

interface Props {
  comparative: DepartmentBudgetComparativeChartItem[]
}

export const DepartmentBudgetComparativeChart = ({ comparative }: Props) => {
  const chartData = comparative.map((item) => ({
    name: item.name,
    used: item.used,
    remaining: item.remaining,
  }))

  const chartConfig: ChartConfig = {
    used: {
      label: 'Usado',
      color: 'var(--chart-1)',
    },
    remaining: {
      label: 'Disponível',
      color: 'var(--chart-2)',
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orçamento por departamento</CardTitle>
        <CardDescription>Usado × Disponível</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />

            <XAxis dataKey="name" tickLine={false} tickMargin={10} axisLine={false} />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => {
                    const label = name === 'used' ? 'Usado: ' : 'Restante: '

                    return [label, formatCurrencyToBRL(Number(value))]
                  }}
                />
              }
            />

            <ChartLegend content={<ChartLegendContent />} />

            <Bar dataKey="used" stackId="a" fill="var(--color-used)" radius={[0, 0, 4, 4]} />

            <Bar
              dataKey="remaining"
              stackId="a"
              fill="var(--color-remaining)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
