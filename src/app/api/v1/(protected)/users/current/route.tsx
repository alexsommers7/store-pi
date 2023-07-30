import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { supabaseGetWithFeatures } from '@/_utils/rest-handlers';
import { getSessionData } from '@/_supabase/functions';

export async function GET(request: Request) {
  try {
    const sessionData = await getSessionData();

    if (!sessionData || !sessionData.user) {
      return NextResponse.json({ error: 'Not logged in.' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);

    // RLS handles auth.user_id > id matching at DB level
    const query = supabase
      .from('users')
      .select(searchParams.get('fields') || '*')
      .maybeSingle();

    const responseJson = await supabaseGetWithFeatures(query, searchParams);

    return NextResponse.json(responseJson);
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}

// TODO: Add PATCH
export async function PATCH(request: Request) {}

// TODO: Add DELETE
export async function DELETE(request: Request) {
  // make sure it's not one of the default users
}
