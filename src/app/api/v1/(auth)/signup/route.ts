import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { defaultUserPhotoUrl } from '@/_lib/constants';

interface OptionsData {
  name: string;
  photo?: string;
}

const tablesToInsertUponSignup = ['carts', 'wishlists'];

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

    const newUserId = data?.user?.id;

    // create the user in public users table
    // this is in addition to the auth.users table that is inserted into automatically via .signUp()
    const userRes = await supabase
      .from('users')
      .insert({ id: newUserId, name: data.user?.user_metadata.name });
    const userInsertionError = userRes.error;

    // create the corresponding user row in the other, pre-defined tables
    const insertionErrors = await Promise.all(
      tablesToInsertUponSignup.map(async (table) => {
        try {
          await supabase.from(table).insert({ user_id: newUserId });
          return null;
        } catch (error) {
          return new Error();
        }
      })
    );

    if (error || !data || userInsertionError || insertionErrors.some((e) => e)) {
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
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
