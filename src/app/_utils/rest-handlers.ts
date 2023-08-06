import { addFeaturesToQuery } from '@/_utils/api-features';
import { NextResponse } from 'next/server';

interface ResponseJson {
  data: any;
  count?: number | null;
  nextOffset?: number | null;
}

// for a more user-friendly error message on RLS violations
export function apiError(error: any) {
  if (error.message && error.message.includes('row-level security')) {
    return NextResponse.json(
      { error: 'You must be logged in to perform this action.' },
      { status: 401 }
    );
  } else if (typeof error === 'string') {
    return NextResponse.json({ error }, { status: 400 });
  }

  return NextResponse.json({ error: error?.message || 'Something went wrong.', status: 400 });
}

export function authorizationError() {
  return NextResponse.json(
    { error: 'You must be logged in to perform this action.' },
    { status: 401 }
  );
}

export function modifiedOriginalResourceError() {
  return NextResponse.json(
    {
      message: `You attempted to modify an original resourec. Your data won't be persisted, but here's a 200 response for your troubles.`,
    },
    { status: 200 }
  );
}

export function catchError(error: any) {
  const json = error instanceof Error ? error.message : 'An unexpected error occurred.';
  return NextResponse.json({ error: json }, { status: 500 });
}

export async function supabaseGetWithFeatures(
  query: any,
  searchParams: URLSearchParams,
  isSingle: boolean = false
) {
  query = addFeaturesToQuery(query, searchParams);

  const { data, error, count } = await query;

  if (error) return { error: error.message };

  const responseJson: ResponseJson = { data };

  if (!isSingle) responseJson.count = count;

  if (responseJson.data.length && (searchParams.get('limit') || searchParams.get('offset'))) {
    responseJson.nextOffset =
      Number(searchParams.get('offset')) + Number(searchParams.get('limit'));

    // if at the end of pagination ...
    if (count && responseJson.nextOffset && responseJson.nextOffset >= count) {
      responseJson.nextOffset = null;
    }
  }

  return responseJson;
}
