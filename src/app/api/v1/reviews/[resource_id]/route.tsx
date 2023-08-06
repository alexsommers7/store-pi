import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import {
  catchError,
  modifiedOriginalResourceError,
  apiError,
  authorizationError,
} from '@/_utils/rest-handlers';
import { Context } from '@/_lib/types';
import { getUserData, isOriginalResource } from '@/_supabase/functions';

export async function PATCH(request: Request, context: Context) {
  try {
    const userData = await getUserData();
    if (!userData) return authorizationError();

    const { params } = context;
    const { resource_id } = params;

    const requestBody = await request.json();

    const { data, error } = await supabase
      .from('reviews')
      .update(requestBody)
      .eq('id', resource_id)
      .select();

    if (!data?.length)
      return NextResponse.json(
        { message: 'Review not found or it does not belong to the current user.' },
        { status: 404 }
      );

    if (error) return apiError(error);

    return NextResponse.json({ data });
  } catch (error) {
    return catchError(error);
  }
}

export async function DELETE(request: Request, context: Context) {
  try {
    const userData = await getUserData();
    if (!userData) return authorizationError();

    const { params } = context;
    const { resource_id } = params;

    // get the timestamp first, so we can check if it's an original resource
    const { data: selectData, error: selectError } = await supabase
      .from('reviews')
      .select('created_at')
      .eq('id', resource_id)
      .maybeSingle();

    if (selectError) return apiError(selectError);

    if (isOriginalResource(selectData?.created_at)) {
      return modifiedOriginalResourceError();
    }

    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('user_id', userData.id)
      .eq('id', resource_id);

    if (error) return apiError(error);

    // return 204 no content
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return catchError(error);
  }
}
