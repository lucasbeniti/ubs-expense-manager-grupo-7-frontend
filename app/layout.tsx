import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UBS Expense Manager',
  description:
    'O UBS precisa controlar melhor os gastos corporativos de funcionários em viagens, refeições e despesas diversas. Hoje o processo é feito via planilhas e e-mails, sem rastreabilidade clara, causando risco de estouro de orçamento e reembolsos indevidos.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Toaster richColors={true} position={'top-right'} />

      <html lang="en">
        <body className={inter.variable}>{children}</body>
      </html>
    </>
  )
}
