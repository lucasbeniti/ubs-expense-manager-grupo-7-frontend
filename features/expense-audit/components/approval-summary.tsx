'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ApprovalSummary as ApprovalSummaryType } from '../types'

interface ApprovalSummaryProps {
  data: ApprovalSummaryType[]
}

const ApprovalSummary = ({ data }: ApprovalSummaryProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'approved':
        return { label: 'Aprovadas', color: 'bg-green-500' }
      case 'pending':
        return { label: 'Pendentes', color: 'bg-yellow-500' }
      case 'rejected':
        return { label: 'Rejeitadas', color: 'bg-red-500' }
      default:
        return { label: status, color: 'bg-gray-500' }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo das Aprovações</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.map((item) => {
          const config = getStatusConfig(item.status)
          return (
            <div key={item.status} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{config.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">{item.count}</span>
                  <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${config.color} h-2 rounded-full transition-all`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default ApprovalSummary