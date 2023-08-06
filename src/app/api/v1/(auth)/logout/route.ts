import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { catchError } from '@/_utils/rest-handlers';

export async function POST() {
  try {
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
