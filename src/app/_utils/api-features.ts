export function getLimitParam(limitQueryParam: string | null): number {
  const defaultLimit = 20;

  if (!limitQueryParam) return defaultLimit;

  const parsedLimit = parseInt(limitQueryParam, 10);
  return isNaN(parsedLimit) ? defaultLimit : parsedLimit;
}

export function getOffsetParam(offsetQueryParam: string | null): number {
  const defaultOffset = 0;

  if (!offsetQueryParam) return defaultOffset;

  const parsedOffset = parseInt(offsetQueryParam, 10);
  return isNaN(parsedOffset) ? defaultOffset : parsedOffset;
}

export function getSortParam(sortQueryParam: string | null): Array<[string, boolean]> {
  if (!sortQueryParam) return [['id', true]];

  return sortQueryParam.split(',').map((sort) => [sort.replace('-', ''), !sort.startsWith('-')]);
}

export function addFeaturesToQuery(query: any, searchParams: URLSearchParams) {
  // sorting
  const sortParams = getSortParam(searchParams.get('sort') || '');
  sortParams.forEach(([sortColumn, sortOrder]) => {
    query = query.order(sortColumn, { ascending: sortOrder });
  });

  // limiting
  const limit = getLimitParam(searchParams.get('limit') || '');
  query = query.limit(limit);

  // offsetting
  const offset = getOffsetParam(searchParams.get('offset') || '');
  if (offset) query = query.range(offset, offset + limit - 1); // 0-indexed

  const excludeFromFiltering = ['sort', 'fields', 'limit', 'offset']; // these are for organizing, not filtering

  // filtering (comparison operators)
  for (const [key, value] of searchParams) {
    if (excludeFromFiltering.includes(key)) continue;
    excludeFromFiltering.push(key);

    const lessThan = key.endsWith('_less_than');
    const greaterThan = key.endsWith('_greater_than');
    const lessThanOrEqualTo = key.endsWith('_less_than_or_equal_to');
    const greaterThanOrEqualTo = key.endsWith('_greater_than_or_equal_to');

    if (!lessThan && !greaterThan && !lessThanOrEqualTo && !greaterThanOrEqualTo) continue;

    const field = key.replace(
      /_(less_than|greater_than|less_than_or_equal_to|greater_than_or_equal_to)$/,
      ''
    );
    const operator = lessThan ? 'lt' : greaterThan ? 'gt' : lessThanOrEqualTo ? 'lte' : 'gte';
    query = query[operator](field, value);
  }

  // filtering (equality operators)
  for (const [key, value] of searchParams) {
    if (excludeFromFiltering.includes(key)) continue;
    query = query.eq(key, value);
  }

  return query;
}
