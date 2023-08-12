import { NextResponse } from 'next/server';
import {
  apiError,
  authorizationError,
  modifiedOriginalResourceError,
  catchError,
} from '@/_utils/api-errors';
import { isOriginalResource } from '@/_supabase/server-functions';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { getUserFromRequest } from '@/_utils/rest-handlers';

export async function GET() {
  try {
    const { user } = await getUserFromRequest();
    if (!user) return authorizationError();

    return NextResponse.json({ user });
  } catch (error) {
    return catchError(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const { user } = await getUserFromRequest();
    if (!user) return authorizationError();

    if (isOriginalResource(user.created_at)) {
      return modifiedOriginalResourceError();
    }

    const requestBody = await request.json();
    const { data, error } = await supabase.auth.updateUser(requestBody);

    return error ? apiError(error) : NextResponse.json({ data });
  } catch (error) {
    return catchError(error);
  }
}
