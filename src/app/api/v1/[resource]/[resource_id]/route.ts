import { NextResponse } from 'next/server';
import { supabaseGetWithFeatures, catchError } from '@/_utils/rest-handlers';
import { Context } from '@/_lib/types';
import { generateForeignTableSelectionWhenApplicable } from '@/_supabase/server-functions';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: Request, context: Context) {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const { params } = context;
    const { resource, resource_id } = params;
    const { searchParams } = new URL(request.url);

    const selection = generateForeignTableSelectionWhenApplicable(resource, searchParams);

    let query = supabase
      .from(resource)
      .select(selection, { count: 'exact' })
      .eq('id', resource_id)
      .maybeSingle();

    const responseJson = await supabaseGetWithFeatures(query, searchParams, true);

    return NextResponse.json(responseJson);
  } catch (error) {
    return catchError(error);
  }
}
