import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { Context } from '@/_lib/types';

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource, resource_id } = params;
    const { searchParams } = new URL(request.url);

    const { data, error } = await supabase
      .from(resource)
      .select(searchParams.get('fields') || '*', { count: 'planned' })
      .eq('id', resource_id)
      .maybeSingle();

    if (error || !data) {
      return NextResponse.json(
        { error: `Failed to fetch id ${resource_id} from ${resource}.` },
        { status: 400 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
