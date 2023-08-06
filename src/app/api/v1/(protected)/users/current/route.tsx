import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/_supabase/create-client';
import {
  apiError,
  authorizationError,
  modifiedOriginalResourceError,
} from '@/_utils/rest-handlers';
import { isOriginalResource } from '@/_supabase/functions';
import { catchError } from '@/_utils/rest-handlers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    return NextResponse.json({ user });
  } catch (error) {
    return catchError(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return authorizationError();

    if (isOriginalResource(session.user.created_at)) {
      return modifiedOriginalResourceError();
    }

    const requestBody = await request.json();
    const { data, error } = await supabase.auth.updateUser(requestBody);

    return error ? apiError(error) : NextResponse.json({ data });
  } catch (error) {
    return catchError(error);
  }
}

export async function DELETE() {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    await supabase.auth.signOut();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return authorizationError();

    if (isOriginalResource(session?.user.created_at)) {
      return modifiedOriginalResourceError();
    }

    const { error } = await supabaseAdmin.auth.admin.deleteUser(session?.user?.id || '');

    if (error) return apiError(error);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return catchError(error);
  }
}
