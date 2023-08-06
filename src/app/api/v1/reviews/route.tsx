import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { catchError, apiError, supabaseGetWithFeatures } from '@/_utils/rest-handlers';
import { generateForeignTableSelectionWhenApplicable, getUserData } from '@/_supabase/functions';
import { Context } from '@/_lib/types';

export async function GET(request: Request) {
  try {
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
