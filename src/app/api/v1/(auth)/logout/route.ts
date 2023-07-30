import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';

export async function POST() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return NextResponse.json({ error: error?.message }, { status: 400 });
    }

    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
