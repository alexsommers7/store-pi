import { generateForeignTableSelectionWhenApplicable } from '@/_supabase/server-functions';

function getLimitParam(limitQueryParam: string | null): number {
  const defaultLimit = 20;

  if (!limitQueryParam) return defaultLimit;

  const parsedLimit = parseInt(limitQueryParam, 10);
  return isNaN(parsedLimit) ? defaultLimit : parsedLimit;
}

function getOffsetParam(offsetQueryParam: string | null): number {
  const defaultOffset = 0;

  if (!offsetQueryParam) return defaultOffset;

  const parsedOffset = parseInt(offsetQueryParam, 10);
  return isNaN(parsedOffset) ? defaultOffset : parsedOffset;
}

function getSortParam(sortQueryParam: string | null): Array<[string, boolean]> {
  if (!sortQueryParam) return [['', true]];

  return sortQueryParam.split(',').map((sort) => [sort.replace('-', ''), !sort.startsWith('-')]);
}

export function generateQueryString(
  userId: string | undefined,
  resource: string,
  searchParams?: URLSearchParams,
  isGet?: boolean
) {
  let queryString = '';

  if (isGet) {
    // sorting
    const sortParams = getSortParam(searchParams?.get('sort') || '');
    if (sortParams[0][0]) {
      const sortString = sortParams
        .map(([sortColumn, sortOrder]) => `${sortColumn}.${sortOrder ? 'asc' : 'desc'}`)
        .join(',');
      queryString += `order=${sortString}`;
    }

    // limiting
    const limit = getLimitParam(searchParams?.get('limit') || '');
    queryString += `&limit=${limit}`;

    // offsetting
    const offset = getOffsetParam(searchParams?.get('offset') || '');
    queryString += `&offset=${offset}`;

    // field selection
    const selection = generateForeignTableSelectionWhenApplicable(resource, searchParams);
    queryString += `&select=${selection}`;
  }

  const excludeFromFiltering = ['sort', 'fields', 'limit', 'offset']; // these are for organizing, not filtering

  // for resources that are publicly readble but we still want to allow filtering by user_id (e.g. reviews)
  if (userId) {
    queryString += `&user_id=eq.${userId}`;
  }

  if (!searchParams) return queryString;

  // filtering (comparison operators)
  for (const [key, value] of searchParams) {
    if (excludeFromFiltering.includes(key)) continue;

    const lessThan = key.endsWith('_less_than');
    const greaterThan = key.endsWith('_greater_than');
    const lessThanOrEqualTo = key.endsWith('_less_than_or_equal_to');
    const greaterThanOrEqualTo = key.endsWith('_greater_than_or_equal_to');

    if (!lessThan && !greaterThan && !lessThanOrEqualTo && !greaterThanOrEqualTo) continue;

    excludeFromFiltering.push(key);

    const field = key.replace(
      /_(less_than|greater_than|less_than_or_equal_to|greater_than_or_equal_to)$/,
      ''
    );
    const operator = lessThan ? 'lt' : greaterThan ? 'gt' : lessThanOrEqualTo ? 'lte' : 'gte';
    queryString += `&${field}=${operator}.${value}`;
  }

  // filtering (equality operators)
  for (const [key, value] of searchParams) {
    if (excludeFromFiltering.includes(key)) continue;
    queryString += `&${key}=eq.${value}`;
  }

  return queryString;
}
