import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('token');
  if (authCookie === undefined) {
    return NextResponse.rewrite(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    '/settings/:path',
    '/diario',
    '/home',
    '/planner',
    '/calendario',
    '/metas',
    '/emocoes',
  ],
};
