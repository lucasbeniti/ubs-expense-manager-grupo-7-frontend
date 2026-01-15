import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PERMISSIONS = {
  MANAGER: ['/employees', '/departments', '/categories', '/expenses'],
  FINANCE: ['/expenses', '/alerts', '/expense-logs', '/reports'],
  EMPLOYEE: ['/expenses'],
}

export function proxy(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const role = request.cookies.get('user_role')?.value as keyof typeof PERMISSIONS
  const { pathname } = request.nextUrl

  if (!token && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token && role) {
    if (pathname === '/login' || pathname === '/') {
      return NextResponse.redirect(new URL('/expenses', request.url))
    }

    const allowedRoutes = PERMISSIONS[role] || []

    const canAccess = allowedRoutes.some((route) => pathname.startsWith(route))

    if (!canAccess) {
      return NextResponse.redirect(new URL('/expenses', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/employees/:path*',
    '/departments/:path*',
    '/categories/:path*',
    '/expenses/:path*',
    '/alerts/:path*',
    '/expense-logs/:path*',
    '/reports/:path*',
  ],
}
