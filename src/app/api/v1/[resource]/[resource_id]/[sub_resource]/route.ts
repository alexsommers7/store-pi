import { NextResponse } from 'next/server';
import { Context } from '@/_lib/types';
import { supabaseGetWithFeatures, catchError } from '@/_utils/rest-handlers';
import { generateForeignTableSelectionWhenApplicable } from '@/_supabase/server-functions';
import { columnMap } from '@/_lib/constants';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: Request, context: Context) {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const { params } = context;
    const { resource, resource_id, sub_resource } = params; // e.g. { 'categories', 1, 'products' }
    const { searchParams } = new URL(request.url);

    const selection = generateForeignTableSelectionWhenApplicable(resource, searchParams);

    const query = supabase
      .from(sub_resource)
      .select(selection, { count: 'exact' })
      .eq(columnMap[resource], resource_id);

    const responseJson = await supabaseGetWithFeatures(query, searchParams);

    return NextResponse.json(responseJson);
  } catch (error) {
    return catchError(error);
  }
}
