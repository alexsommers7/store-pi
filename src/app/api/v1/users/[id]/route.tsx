import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/_supabase/create-client';
import { apiError, catchError } from '@/_utils/api-errors';
import { Context } from '@/_lib/types';

export async function GET(request: Request, context: Context) {
  try {
    const { id } = context.params;

    const {
      data: { user },
      error,
    } = await supabaseAdmin.auth.admin.getUserById(id);

    if (error) return apiError(error);

    return NextResponse.json({ data: user });
  } catch (error) {
    return catchError(error);
  }
}
