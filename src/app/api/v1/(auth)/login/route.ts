import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { catchError } from '@/_utils/rest-handlers';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const requestUrl = new URL(request.url);

    const supabase = createRouteHandlerClient({ cookies });

    await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return NextResponse.redirect(requestUrl.origin, {
      status: 301,
    });
  } catch (error) {
    return catchError(error);
  }
}
