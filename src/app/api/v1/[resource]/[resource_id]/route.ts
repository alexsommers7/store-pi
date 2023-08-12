import { NextResponse } from 'next/server';
import { apiError, catchError } from '@/_utils/api-errors';
import { Context } from '@/_lib/types';
import { postgrestFetch } from '@/_utils/rest-handlers';

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource, resource_id } = params;
    const { searchParams } = new URL(request.url);

    searchParams.append('id', resource_id);

    const { json, error } = await postgrestFetch({ resource, searchParams });

    if (error) return apiError(error);

    return NextResponse.json(json);
  } catch (error) {
    return catchError(error);
  }
}
