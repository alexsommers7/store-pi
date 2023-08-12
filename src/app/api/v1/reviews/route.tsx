import { NextResponse } from 'next/server';
import { catchError, apiError, authorizationError } from '@/_utils/api-errors';
import { getUserFromRequest, postgrestFetch } from '@/_utils/rest-handlers';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const { json, error } = await postgrestFetch({ resource: 'reviews', searchParams });

    if (error) return apiError(error);

    return NextResponse.json(json);
  } catch (error) {
    return catchError(error);
  }
}

export async function POST(request: Request) {
  try {
    const { user, jwt } = await getUserFromRequest();
    if (!user || !jwt) return authorizationError();

    const requestBody = await request.json();
    requestBody['user_id'] = user.id;

    const { json, error } = await postgrestFetch({
      resource: 'reviews',
      jwt,
      method: 'POST',
      body: requestBody,
    });

    if (error) return apiError(error);

    return NextResponse.json({ data: json[0] });
  } catch (error) {
    return catchError(error);
  }
}
