import { NextResponse } from 'next/server';
import {
  catchError,
  apiError,
  supabaseGetWithFeatures,
  authorizationError,
} from '@/_utils/rest-handlers';
import { generateForeignTableSelectionWhenApplicable } from '@/_supabase/server-functions';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const { searchParams } = new URL(request.url);

    const selection = generateForeignTableSelectionWhenApplicable('reviews', searchParams);

    const query = supabase.from('reviews').select(selection, { count: 'exact' });

    const responseJson = await supabaseGetWithFeatures(query, searchParams);

    return NextResponse.json(responseJson);
  } catch (error) {
    return catchError(error);
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return authorizationError();

    const requestBody = await request.json();
    requestBody['user_id'] = session.user.id;

    const { data, error } = await supabase
      .from('reviews')
      .insert(requestBody)
      .select()
      .maybeSingle();

    if (error) return apiError(error);

    return NextResponse.json({ data });
  } catch (error) {
    return catchError(error);
  }
}
