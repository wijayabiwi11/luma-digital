import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Jika request ke root path
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next()
  }

  // Jika request ke /contact
  if (request.nextUrl.pathname === '/contact') {
    return NextResponse.next()
  }

  // Jika path tidak valid, redirect ke 404
  if (!request.nextUrl.pathname.startsWith('/_next') && 
      !request.nextUrl.pathname.startsWith('/api') &&
      !request.nextUrl.pathname.startsWith('/static') &&
      !request.nextUrl.pathname.startsWith('/images') &&
      !request.nextUrl.pathname.startsWith('/videos') &&
      !request.nextUrl.pathname.startsWith('/placeholder')) {
    return NextResponse.redirect(new URL('/404', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 