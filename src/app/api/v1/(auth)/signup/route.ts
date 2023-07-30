import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { defaultUserPhotoUrl } from '@/_lib/constants';

interface OptionsData {
  name: string;
  photo?: string;
}

export async function POST(request: Request) {
  try {
    const { email, password, name, photo } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const optionsData: OptionsData = { name };
    if (photo) optionsData.photo = photo;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: optionsData,
      },
    });

    const res = await supabase
      .from('users')
      .insert({ id: data.user?.id, name: data.user?.user_metadata.name });
    const userInsertionError = res.error;

    if (error || userInsertionError || !data) {
      return NextResponse.json({ error: error?.message }, { status: 400 });
    }

    // TODO: insert new row into cart table

    // TODO: insert new row into wishlists table

    if (data.user && !data.user.user_metadata.photo) {
      data.user.user_metadata.photo = defaultUserPhotoUrl;
    }
    return NextResponse.json({ data });
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
