import { NextResponse } from 'next/server';
import { Context } from '@/_lib/types';
import { apiError, catchError } from '@/_utils/api-errors';
import { postgrestFetch } from '@/_utils/rest-handlers';

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource } = params;
    const { searchParams } = new URL(request.url);

    const { json, error } = await postgrestFetch({ resource, searchParams });

    if (error) return apiError(error);

    return NextResponse.json(json);
  } catch (error) {
    return catchError(error);
  }
}
