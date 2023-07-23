import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/_utils/auth';

export const config = {
  matcher: ['/api/(.*)/users/:path*'],
};

export function middleware(request: NextRequest) {
  // enable cors
  request.headers.set('Access-Control-Allow-Origin', '*');
  request.headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  request.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (!isAuthenticated(request)) {
    return new NextResponse(JSON.stringify({ success: false, message: 'authentication failed' }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    });
  }
}
