import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { addFeaturesToQuery } from './api-features';

interface ResponseJson {
  data: any;
  count?: number | null;
  nextOffset?: number | null;
}

export async function supabaseGetWithFeatures(resource: string, searchParams: URLSearchParams) {
  let query = supabase.from(resource).select(searchParams.get('fields') || '*', { count: 'exact' });
  query = addFeaturesToQuery(query, searchParams);

  const { data, error, count } = await query;

  if (error || !data) {
    return NextResponse.json({ error: error?.message }, { status: 400 });
  }

  const responseJson: ResponseJson = { data };

  if (searchParams.get('limit') || searchParams.get('offset')) {
    responseJson.count = count;

    responseJson.nextOffset =
      Number(searchParams.get('offset')) + Number(searchParams.get('limit'));

    // if at the end of pagination ...
    if (count && responseJson.nextOffset && responseJson.nextOffset >= count) {
      responseJson.nextOffset = null;
    }
  }

  return NextResponse.json(responseJson);
}
