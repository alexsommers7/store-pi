import { generateQueryString } from '@/_utils/api-features';
import { HTTPMethods, restUrlBase } from '@/_lib/constants';
import { cookies, headers } from 'next/headers';
import { User, createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

interface ResponseJson {
  data: any;
  count?: number | null;
  nextOffset?: number | null;
}

interface FetchOptions {
  method: keyof typeof HTTPMethods;
  headers: {
    'Content-Type'?: string;
    apikey: string;
    Authorization?: string;
    Prefer?: string;
  };
  body?: BodyInit;
}

interface PostgrestFetchParams {
  resource: string;
  jwt?: string;
  searchParams?: URLSearchParams;
  userId?: string;
  method?: keyof typeof HTTPMethods;
  body?: BodyInit | { [key: string]: any };
}

interface GetUserFromRequestReturn {
  user: User | null;
  jwt: string | null;
}

// Postgrest
const anonHeaders = {
  apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  'Content-Type': 'application/json',
  Prefer: 'count=exact',
};

const generateAuthHeaders = (jwt: string, method?: keyof typeof HTTPMethods) => {
  const obj = {
    ...anonHeaders,
    Authorization: `Bearer ${jwt}`,
  };

  if (['POST', 'PATCH'].includes(method?.toUpperCase() || '')) {
    obj.Prefer = 'return=representation';
  }

  return obj;
};

export const postgrestFetch = async ({
  resource,
  jwt,
  searchParams,
  userId,
  body,
  method = 'GET',
}: PostgrestFetchParams) => {
  try {
    const headers = jwt ? generateAuthHeaders(jwt, method) : anonHeaders;
    const options: FetchOptions = { method, headers };

    if (body && !['GET', 'DELETE'].includes(method.toUpperCase())) {
      options.body = JSON.stringify(body);
    }

    const queryString = generateQueryString(userId, resource, searchParams, method === 'GET');

    const res = await fetch(
      `${restUrlBase}/${resource}${queryString ? '?' + queryString : ''}`,
      options
    );

    if (!res.ok) throw new Error(res.statusText);

    let json;

    if (method === 'DELETE') {
      return { json: null, error: null };
    }

    if (['POST', 'PATCH'].includes(method.toUpperCase())) {
      json = await res.json();
      return { json, error: null };
    }

    json = await res.json();

    const contentRange = res.headers.get('content-range');
    const count = contentRange ? Number(contentRange.split('/')[1]) : null;

    const responseJson: ResponseJson = { data: json, count };

    if (responseJson.data.length && (searchParams?.get('limit') || searchParams?.get('offset'))) {
      responseJson.nextOffset =
        Number(searchParams.get('offset')) + Number(searchParams.get('limit'));

      // if at the end of pagination ...
      if (count && responseJson.nextOffset && responseJson.nextOffset >= count) {
        responseJson.nextOffset = null;
      }
    }

    return { json: responseJson, error: null };
  } catch (error) {
    return { json: null, error: error as Error };
  }
};

export const getUserFromRequest = async (): Promise<GetUserFromRequestReturn> => {
  const supabase = createRouteHandlerClient({ cookies });

  const headersInstance = headers();
  const authorization = headersInstance.get('authorization');

  if (!authorization) {
    return { user: null, jwt: '' };
  }
  const jwt = authorization.split(' ')[1];

  const {
    data: { user },
  } = await supabase.auth.getUser(jwt);

  return { user, jwt };
};

export const callStoredProcedure = async ({
  jwt,
  procedureName,
  params,
}: {
  jwt: string;
  procedureName: string;
  params: any;
}) => {
  try {
    const headers = generateAuthHeaders(jwt);
    const options: FetchOptions = { method: 'POST', headers, body: JSON.stringify(params) };

    const res = await fetch(`${restUrlBase}/rpc/${procedureName}`, options);

    if (!res.ok) throw new Error(res.statusText);

    return await res.json();
  } catch (error) {
    return error;
  }
};
