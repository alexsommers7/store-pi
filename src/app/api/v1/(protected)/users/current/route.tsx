import { NextResponse } from 'next/server';
import supabase, { supabaseAdmin } from '@/_supabase/create-client';
import {
  apiError,
  authorizationError,
  modifiedOriginalResourceError,
} from '@/_utils/rest-handlers';
import { getUserData, isOriginalResource } from '@/_supabase/functions';
import { catchError } from '@/_utils/rest-handlers';

export async function GET() {
  try {
    const userData = await getUserData();
    if (!userData) return authorizationError();

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
    const userData = await getUserData();
    if (!userData) return authorizationError();

    if (isOriginalResource(userData.created_at)) {
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
    const userData = await getUserData();
    if (!userData) return authorizationError();

    await supabase.auth.signOut();

    if (isOriginalResource(userData.created_at)) {
      return modifiedOriginalResourceError();
    }

    const { error } = await supabaseAdmin.auth.admin.deleteUser(userData.id);

    if (error) return apiError(error);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return catchError(error);
  }
}
