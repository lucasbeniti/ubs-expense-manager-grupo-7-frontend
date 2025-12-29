'use client'

import { forwardRef } from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'
import { Input } from '@/components/ui/input'

interface MoneyInputProps extends Omit<NumericFormatProps, 'customInput' | 'onValueChange'> {
  value?: number
  onValueChange?: (value: number | undefined) => void
}

export const MoneyInput = forwardRef<HTMLInputElement, MoneyInputProps>(
  ({ value, onValueChange, ...props }, ref) => {
    return (
      <NumericFormat
        {...props}
        getInputRef={ref}
        value={value}
        onValueChange={(values) => {
          onValueChange?.(values.floatValue ?? 0)
        }}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
        customInput={Input}
      />
    )
  }
)

MoneyInput.displayName = 'MoneyInput'
