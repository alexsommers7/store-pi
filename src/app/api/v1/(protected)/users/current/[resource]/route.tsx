import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { Context } from '@/_lib/types';
import { supabaseGetWithFeatures } from '@/_utils/rest-handlers';
import { getSessionData } from '@/_supabase/functions';
import { generateForeignTableSelectionWhenApplicable } from '@/_supabase/functions';

export async function GET(request: Request, context: Context) {
  try {
    const sessionData = await getSessionData();

    if (!sessionData || !sessionData.user) {
      return NextResponse.json({ error: 'Not logged in.' }, { status: 401 });
    }

    const { params } = context;
    const { resource } = params;
    const { searchParams } = new URL(request.url);

    const selection = generateForeignTableSelectionWhenApplicable(resource, searchParams);

    // RLS handles user_id matching at DB level
    const query = supabase.from(resource).select(selection, { count: 'exact' });

    const responseJson = await supabaseGetWithFeatures(query, searchParams);

    return NextResponse.json(responseJson);
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}

export async function PATCH(request: Request) {}

export async function DELETE(request: Request) {
  // make sure it's not one of the default resources
}
