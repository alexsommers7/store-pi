import { NextResponse } from 'next/server';
import supabase from '@/_utils/supabase';
import { Context } from '@/_lib/types';
// import { headers } from 'next/headers';

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource } = params;

    // const { searchParams } = new URL(request.url);
    // const id = searchParams.get('id');
    // const headersList = headers();
    // const referer = headersList.get('referer')

    const { data, error } = await supabase.from(resource).select().limit(3);

    if (error) {
      return NextResponse.json({ error: `Failed to fetch ${resource}.` }, { status: 500 });
    }

    if (!data || !data.length) {
      return NextResponse.json({ error: `${resource} does not exist.` }, { status: 404 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
