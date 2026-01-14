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
import { Loader2Icon } from 'lucide-react'
import { formatCurrencyToBRL } from '@/lib/utils/currency'

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
      <CardHeader className="pb-3">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="flex flex-col justify-center gap-1">
            <CardTitle className="text-base md:text-lg">Gastos por funcionário</CardTitle>
            <CardDescription className="text-xs md:text-sm">
              {format(displayStart, 'dd/MM/yyyy')} — {format(displayEnd, 'dd/MM/yyyy')}
            </CardDescription>
          </div>

          <div className="flex w-full flex-wrap items-end gap-2">
            <div className="flex min-w-[140px] flex-1 flex-col">
              <span className="text-muted-foreground text-xs">Data inicial</span>
              <DatePicker value={startDate} onChange={setStartDate} />
            </div>

            <div className="flex min-w-[140px] flex-1 flex-col">
              <span className="text-muted-foreground text-xs">Data final</span>
              <DatePicker value={endDate} onChange={setEndDate} />
            </div>

            <Button size="sm" onClick={handleFilter} disabled={loading} className="h-10 shrink-0">
              {loading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
              Filtrar
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-[280px]">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: -10 }}>
            <CartesianGrid vertical={false} />

            <XAxis dataKey="name" tickLine={false} axisLine={false} />

            <YAxis
              width={90}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => formatCurrencyToBRL(value)}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) => `Gasto: ${formatCurrencyToBRL(Number(value))}`}
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
