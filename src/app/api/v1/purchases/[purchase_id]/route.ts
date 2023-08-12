import { NextResponse } from 'next/server';
import { apiError, authorizationError, catchError } from '@/_utils/api-errors';
import { Context } from '@/_lib/types';
import { getUserFromRequest, postgrestFetch } from '@/_utils/rest-handlers';

export async function GET(request: Request, context: Context) {
  try {
    const { user, jwt } = await getUserFromRequest();
    if (!user || !jwt) return authorizationError();

    const { params } = context;
    const { purchase_id } = params;
    const { searchParams } = new URL(request.url);

    searchParams.append('id', purchase_id);

    const { json, error } = await postgrestFetch({
      resource: 'purchases',
      searchParams,
      jwt,
      userId: user.id,
    });

    if (error) return apiError(error);

    return NextResponse.json(json);
  } catch (error) {
    return catchError(error);
  }
}
