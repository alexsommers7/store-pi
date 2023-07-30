import { addFeaturesToQuery } from '@/_utils/api-features';

interface ResponseJson {
  data: any;
  count?: number | null;
  nextOffset?: number | null;
}

export async function supabaseGetWithFeatures(query: any, searchParams: URLSearchParams) {
  query = addFeaturesToQuery(query, searchParams);

  const { data, error, count } = await query;

  if (error || !data) {
    return { error: error?.message || 'Something went wrong.', status: 400 };
  }

  const responseJson: ResponseJson = { data, count };

  if (searchParams.get('limit') || searchParams.get('offset')) {
    responseJson.nextOffset =
      Number(searchParams.get('offset')) + Number(searchParams.get('limit'));

    // if at the end of pagination ...
    if (count && responseJson.nextOffset && responseJson.nextOffset >= count) {
      responseJson.nextOffset = null;
    }
  }

  return responseJson;
}
