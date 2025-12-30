import Image from 'next/image'
import { LoginForm } from '@/features/auth/components/login-form'

const LoginPage = () => {
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="bg-muted flex items-center justify-center px-4">
        <LoginForm />
      </div>

      <div className="relative hidden md:block">
        <Image
          src="/ubs-logo.webp"
          alt="UBS Expense Manager"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  )
}

export default LoginPage
