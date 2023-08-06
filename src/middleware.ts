import { NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export const config = {
  matcher: ['/api/:path*'],
};

export async function middleware(req: NextRequest) {
  // enable cors
  const res = NextResponse.next();
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.headers.set('Access-Control-Allow-Credentials', 'true');

  // auth
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}
