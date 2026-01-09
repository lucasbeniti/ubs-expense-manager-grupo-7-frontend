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

const chartData = [
  { department: 'TI', used: 62000, remaining: 18000 },
  { department: 'Financeiro', used: 45000, remaining: 15000 },
  { department: 'Operações', used: 72000, remaining: 8000 },
  { department: 'Marketing', used: 38000, remaining: 22000 },
]

const chartConfig = {
  used: {
    label: 'Usado',
    color: 'var(--chart-1)',
  },
  remaining: {
    label: 'Disponível',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig

export const DepartmentBudgetComparativeChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orçamento por departamento</CardTitle>
        <CardDescription>Usado × disponível</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />

            <XAxis dataKey="department" tickLine={false} tickMargin={10} axisLine={false} />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => `R$ ${Number(value).toLocaleString('pt-BR')}`}
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
