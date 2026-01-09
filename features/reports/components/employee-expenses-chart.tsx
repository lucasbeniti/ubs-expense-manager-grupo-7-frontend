'use client'

import { useState } from 'react'
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { EmployeeExpenseChartItem } from '../types'
import { DatePicker } from '@/components/shared/date-picker'
import { format } from 'date-fns'
import { getEmployeeExpenses } from '../api'
import { mapEmployeeExpensesToChart } from '../mapper'

const chartConfig = {
  total: {
    label: 'Gasto',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

interface EmployeeExpensesChartProps {
  expenses: EmployeeExpenseChartItem[]
}

export const EmployeeExpensesChart = ({ expenses }: EmployeeExpensesChartProps) => {
  const [chartData, setChartData] = useState<EmployeeExpenseChartItem[]>(expenses)
  const [loading, setLoading] = useState(false)

  const today = new Date()
  const [startDate, setStartDate] = useState<Date | undefined>(today)
  const [endDate, setEndDate] = useState<Date | undefined>(today)

  const handleFilter = async () => {
    try {
      setLoading(true)

      const start = startDate ? format(startDate, 'yyyy-MM-dd') : undefined
      const end = endDate ? format(endDate, 'yyyy-MM-dd') : undefined

      const response = await getEmployeeExpenses(start, end)
      const mapped = mapEmployeeExpensesToChart(response)

      setChartData(mapped)
    } catch (error) {
      console.error('Erro ao buscar relatório', error)
    } finally {
      setLoading(false)
    }
  }

  const displayStart = startDate ?? new Date()
  const displayEnd = endDate ?? new Date()

  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>Gastos por funcionário</CardTitle>
            <CardDescription>
              Período:{' '}
              <span className="font-medium">
                {format(displayStart, 'dd/MM/yyyy')} — {format(displayEnd, 'dd/MM/yyyy')}
              </span>
            </CardDescription>
          </div>

          <div className="flex gap-2">
            <DatePicker value={startDate} onChange={setStartDate} placeholder="Data inicial" />

            <DatePicker value={endDate} onChange={setEndDate} placeholder="Data final" />

            <Button size="sm" onClick={handleFilter} disabled={loading}>
              {loading ? 'Filtrando...' : 'Filtrar'}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-[280px]">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid vertical={false} />

            <XAxis dataKey="name" tickLine={false} axisLine={false} />

            <YAxis
              width={90}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `R$ ${v.toLocaleString('pt-BR')}`}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) =>
                    `Gasto: R$ ${Number(value).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}`
                  }
                />
              }
            />

            <Bar dataKey="total" fill="var(--color-total)" radius={6}>
              <LabelList
                position="top"
                className="fill-foreground text-xs"
                formatter={(v: number) => `R$ ${v.toLocaleString('pt-BR')}`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
