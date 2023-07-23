import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/_utils/auth';

export const config = {
  matcher: ['/api/:path*'],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // enable cors
  const response = NextResponse.next({});
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Credentials', 'true');

  if (pathname.split('/').includes('users') && !isAuthenticated(req)) {
    return new NextResponse(JSON.stringify({ success: false, message: 'authentication failed' }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    });
  }

  return response;
}
