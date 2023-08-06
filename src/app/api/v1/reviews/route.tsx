import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { catchError, apiError } from '@/_utils/rest-handlers';
import { getUserData } from '@/_supabase/functions';

export async function POST(request: Request) {
  try {
    const userData = await getUserData();
    if (!userData) return apiError('You must be logged in to perform this action.');

    const requestBody = await request.json();
    requestBody['user_id'] = userData.id;

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
