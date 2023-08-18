import { NextResponse } from 'next/server';
import {
  apiError,
  authorizationError,
  modifiedOriginalResourceError,
  catchError,
} from '@/_utils/api-errors';
import { isOriginalResource } from '@/_supabase/server-functions';
import { getUserFromRequest, postgrestFetch } from '@/_utils/rest-handlers';
import { UserObject } from '@/_lib/types';

export async function GET(request: Request) {
  try {
    const { user } = await getUserFromRequest();
    if (!user) return authorizationError();

    const { searchParams } = new URL(request.url);

    searchParams.append('user_id', user.id);

    const { json, error } = await postgrestFetch({
      resource: 'users',
      searchParams,
    });

    if (error) return apiError(error);

    // user_id is just used internally to map to auth.users
    if (json.data.some((obj: UserObject) => obj.hasOwnProperty('user_id')))
      json.data.forEach((obj: UserObject) => delete obj.user_id);

    return NextResponse.json({ data: json.data[0] });
  } catch (error) {
    return catchError(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const { user, jwt } = await getUserFromRequest();
    if (!user || !jwt) return authorizationError();

    if (isOriginalResource(user.created_at)) {
      return modifiedOriginalResourceError();
    }

    const requestBody = await request.json();
    const { json, error } = await postgrestFetch({
      resource: 'users',
      jwt,
      method: 'PATCH',
      body: requestBody,
      searchParams: new URLSearchParams({ user_id: user.id }),
    });

    if (error) return apiError(error);

    // user_id is just used internally to map to auth.users
    if (json.some((obj: UserObject) => obj.hasOwnProperty('user_id')))
      json.forEach((obj: UserObject) => delete obj.user_id);

    return error ? apiError(error) : NextResponse.json({ data: json });
  } catch (error) {
    return catchError(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const { user, jwt } = await getUserFromRequest();
    if (!user || !jwt) return authorizationError();

    // get the timestamp first, so we can check if it's an original resource
    const { json: selectJson, error: selectError } = await postgrestFetch({
      resource: 'users',
      searchParams: new URLSearchParams({ user_id: user.id }),
    });

    if (selectError) return apiError(selectError);

    if (isOriginalResource(selectJson.data[0]?.created_at)) {
      return modifiedOriginalResourceError();
    }

    const { error } = await postgrestFetch({
      resource: 'users',
      method: 'DELETE',
      jwt,
      searchParams: new URLSearchParams({ user_id: user.id }),
    });

    if (error) return apiError(error);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return catchError(error);
  }
}
