import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data) {
      return NextResponse.json({ error: error?.message }, { status: 400 });
    }

    return NextResponse.json({ data: data.session });
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
