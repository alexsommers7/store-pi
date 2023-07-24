import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { addFeaturesToQuery } from './api-features';

export async function supabaseGetWithFeatures(resource: string, searchParams: URLSearchParams) {
  let query = supabase
    .from(resource)
    .select(searchParams.get('fields') || '*', { count: 'planned' });
  query = addFeaturesToQuery(query, searchParams);

  const { data, error, count } = await query;

  if (error || !data) {
    return NextResponse.json({ error: `Failed to fetch ${resource}.` }, { status: 400 });
  }

  return NextResponse.json({ count, data });
}
