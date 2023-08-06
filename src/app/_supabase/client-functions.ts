import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { cache } from 'react';

export const getColumnsWithType = cache(async (table: string) => {
  const supabase = createRouteHandlerClient({ cookies });

  return await supabase.rpc('get_cols_with_type', { tname: table });
});
