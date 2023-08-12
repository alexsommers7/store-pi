import { NextResponse } from 'next/server';
import { Context } from '@/_lib/types';
import { apiError, catchError } from '@/_utils/api-errors';
import { columnMap } from '@/_lib/constants';
import { postgrestFetch } from '@/_utils/rest-handlers';

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource, resource_id, sub_resource } = params; // e.g. { 'categories', 1, 'products' }
    const { searchParams } = new URL(request.url);

    searchParams.append(columnMap[resource], resource_id);

    const { json, error } = await postgrestFetch({ resource: sub_resource, searchParams });

    if (error) return apiError(error);

    return NextResponse.json(json);
  } catch (error) {
    return catchError(error);
  }
}
