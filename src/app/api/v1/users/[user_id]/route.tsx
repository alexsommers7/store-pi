import { NextResponse } from 'next/server';
import { apiError, catchError } from '@/_utils/api-errors';
import { Context } from '@/_lib/types';
import { postgrestFetch } from '@/_utils/rest-handlers';
import { UserObject } from '@/_lib/types';

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { user_id } = params;
    const { searchParams } = new URL(request.url);

    searchParams.append('id', user_id);

    const { json, error } = await postgrestFetch({
      resource: 'users',
      searchParams,
    });

    if (error) return apiError(error);

    // user_id is just used internally to map to auth.users
    if (json.data.some((obj: UserObject) => obj.hasOwnProperty('user_id')))
      json.data.forEach((obj: UserObject) => delete obj.user_id);

    return NextResponse.json(json);
  } catch (error) {
    return catchError(error);
  }
}
