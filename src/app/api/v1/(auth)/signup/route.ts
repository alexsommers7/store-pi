import { NextResponse } from 'next/server';
import { defaultUserPhotoUrl } from '@/_lib/constants';
import { catchError } from '@/_utils/api-errors';
import supabase from '@/_supabase/create-client';

interface OptionsData {
  name: string;
  photo?: string;
}

export async function POST(request: Request) {
  try {
    const { email, password, name, photo } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Name, email, and password are required.' },
        { status: 400 }
      );
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

    if (error || !data) {
      return NextResponse.json(
        { error: error?.message || 'User creation unsuccessful.' },
        { status: 400 }
      );
    }

    if (data.user && !data.user.user_metadata.photo) {
      data.user.user_metadata.photo = defaultUserPhotoUrl;
    }

    return NextResponse.json({ data: data.session });
  } catch (error) {
    return catchError(error);
  }
}
