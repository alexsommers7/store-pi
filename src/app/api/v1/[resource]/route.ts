import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { Context } from '@/_lib/types';
import { supabaseGetWithFeatures } from '@/_utils/rest-handlers';

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource } = params;
    const { searchParams } = new URL(request.url);

    const query = supabase
      .from(resource)
      .select(searchParams.get('fields') || '*', { count: 'exact' });

    const responseJson = await supabaseGetWithFeatures(query, searchParams);

    return NextResponse.json(responseJson);
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
