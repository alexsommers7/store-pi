import { NextResponse } from 'next/server';
import { catchError } from '@/_utils/rest-handlers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const { error } = await supabase.auth.signOut();

    if (error) {
      return NextResponse.json({ error: error?.message }, { status: 400 });
    }

    return new NextResponse(null, {
      status: 204,
    });
  } catch (error) {
    return catchError(error);
  }
}
