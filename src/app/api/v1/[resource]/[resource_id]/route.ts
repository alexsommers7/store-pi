import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { supabaseGetWithFeatures, catchError } from '@/_utils/rest-handlers';
import { Context } from '@/_lib/types';
import { generateForeignTableSelectionWhenApplicable } from '@/_supabase/functions';

export async function GET(request: Request, context: Context) {
  try {
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
