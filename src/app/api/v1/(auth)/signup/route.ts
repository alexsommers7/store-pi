import { NextResponse } from 'next/server';
import { apiError, catchError } from '@/_utils/api-errors';
import { postgrestFetch } from '@/_utils/rest-handlers';
import supabase from '@/_supabase/create-client';

export async function POST(request: Request) {
  try {
    const { email, password, name, photo } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Name, email, and password are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error || !data) {
      return NextResponse.json(
        { error: error?.message || 'User creation unsuccessful.' },
        { status: 400 }
      );
    }

    // doing this here instead of a supabase function because ...
    // need access to request body and don't want to store it in auth.users
    const { error: userError } = await postgrestFetch({
      resource: 'users',
      method: 'POST',
      jwt: data.session?.access_token,
      body: { user_id: data.user?.id, name, photo },
    });

    if (userError) return apiError(userError);

    return NextResponse.json({ data });
  } catch (error) {
    return catchError(error);
  }
}
