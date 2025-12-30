import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const { pathname } = request.nextUrl

  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/users', request.url))
  }

  const isProtectedRoute = pathname.startsWith('/users')

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/users/:path*', '/departments/:path*'],
}
