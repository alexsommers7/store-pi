import { NextResponse } from 'next/server';
import { Context } from '@/_lib/types';
import { supabaseGetWithFeatures } from '@/_utils/rest-handlers';

// import { headers } from 'next/headers';
// const headersList = headers();
// const referer = headersList.get('referer')

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource } = params;
    const { searchParams } = new URL(request.url);

    return await supabaseGetWithFeatures(resource, searchParams);
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
