import { NextResponse } from 'next/server';
import {
  catchError,
  apiError,
  authorizationError,
  modifiedOriginalResourceError,
} from '@/_utils/api-errors';
import { Context } from '@/_lib/types';
import { isOriginalResource } from '@/_supabase/server-functions';
import { callStoredProcedure, getUserFromRequest, postgrestFetch } from '@/_utils/rest-handlers';

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { review_id } = params;
    const { searchParams } = new URL(request.url);

    searchParams.append('id', review_id);

    const { json, error } = await postgrestFetch({
      resource: 'reviews',
      searchParams,
    });

    if (error) return apiError(error);

    return NextResponse.json(json);
  } catch (error) {
    return catchError(error);
  }
}

export async function PATCH(request: Request, context: Context) {
  try {
    const { user, jwt } = await getUserFromRequest();
    if (!user || !jwt) return authorizationError();

    const { params } = context;
    const { review_id } = params;

    // get the timestamp first, so we can check if it's an original resource
    const { json: selectJson, error: selectError } = await postgrestFetch({
      resource: 'reviews',
      searchParams: new URLSearchParams({ id: review_id }),
    });

    if (selectError || !selectJson.data.length) return apiError(selectError || 'Not found');

    if (isOriginalResource(selectJson.data[0].created_at)) {
      return modifiedOriginalResourceError();
    }

    const requestBody = await request.json();

    const { json, error } = await postgrestFetch({
      resource: 'reviews',
      method: 'PATCH',
      jwt,
      searchParams: new URLSearchParams({ id: review_id }),
      body: requestBody,
    });

    if (error) return apiError(error);

    const { error: storedProcedureError } = await callStoredProcedure({
      procedureName: 'update_product_review_stats',
      jwt,
      params: {
        product_id_param: selectJson.data[0].product_id,
      },
    });

    if (storedProcedureError) return apiError(storedProcedureError);

    return NextResponse.json({ data: json[0] });
  } catch (error) {
    return catchError(error);
  }
}

export async function DELETE(request: Request, context: Context) {
  try {
    const { user, jwt } = await getUserFromRequest();
    if (!user || !jwt) return authorizationError();

    const { params } = context;
    const { review_id } = params;

    // get the timestamp first, so we can check if it's an original resource
    const { json: selectJson, error: selectError } = await postgrestFetch({
      resource: 'reviews',
      searchParams: new URLSearchParams({ id: review_id }),
    });

    if (selectError) return apiError(selectError);

    if (isOriginalResource(selectJson.data[0]?.created_at)) {
      return modifiedOriginalResourceError();
    }

    const { error } = await postgrestFetch({
      resource: 'reviews',
      method: 'DELETE',
      jwt,
      searchParams: new URLSearchParams({ id: review_id }),
    });

    if (error) return apiError(error);

    const { error: storedProcedureError } = await callStoredProcedure({
      procedureName: 'update_product_review_stats',
      jwt,
      params: {
        product_id_param: selectJson.data[0].product_id,
      },
    });

    if (storedProcedureError) return apiError(storedProcedureError);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return catchError(error);
  }
}
