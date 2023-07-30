import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { supabaseGetWithFeatures } from '@/_utils/rest-handlers';
import { Context } from '@/_lib/types';

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource, resource_id } = params;
    const { searchParams } = new URL(request.url);

    const query = supabase
      .from(resource)
      .select(searchParams.get('fields') || '*', { count: 'exact' })
      .eq('id', resource_id)
      .maybeSingle();

    const responseJson = await supabaseGetWithFeatures(query, searchParams);

    return NextResponse.json(responseJson);
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
