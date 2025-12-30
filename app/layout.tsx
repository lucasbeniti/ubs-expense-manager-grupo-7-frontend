import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

export const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
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
        <body className={ibmPlex.variable}>{children}</body>
      </html>
    </>
  )
}
