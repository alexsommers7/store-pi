import { NextResponse } from 'next/server';
import { apiError, catchError } from '@/_utils/api-errors';
import { postgrestFetch } from '@/_utils/rest-handlers';
import { UserObject } from '@/_lib/types';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const { json, error } = await postgrestFetch({ resource: 'users', searchParams });

    if (error) return apiError(error);

    // user_id is just used internally to map to auth.users
    if (json.data.some((obj: UserObject) => obj.hasOwnProperty('user_id')))
      json.data.forEach((obj: UserObject) => delete obj.user_id);

    // only return users from the default dataset
    return NextResponse.json({ count: json.count, data: json.data.slice(0, 19) });
  } catch (error) {
    return catchError(error);
  }
}
