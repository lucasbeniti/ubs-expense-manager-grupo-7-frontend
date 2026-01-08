import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_ROUTES = ['/login']
const AUTH_REDIRECT = '/users'

export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl

  // const token = request.cookies.get('token')?.value
  // const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname.startsWith(route))

  // if (!token && !isPublicRoute) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  // if (token && isPublicRoute) {
  //   return NextResponse.redirect(new URL(AUTH_REDIRECT, request.url))
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
