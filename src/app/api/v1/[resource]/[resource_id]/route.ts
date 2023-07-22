import { NextResponse } from 'next/server';
import supabase from '@/_utils/supabase';
import { Context } from '@/_lib/types';

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource, resource_id } = params;

    const { data, error } = await supabase.from(resource).select().eq('id', resource_id);

    if (error) {
      return NextResponse.json(
        { error: `Failed to fetch from ${resource}.`, params },
        { status: 500 }
      );
    }

    if (!data || !data.length) {
      return NextResponse.json(
        { error: `Resource with id ${resource_id} not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
