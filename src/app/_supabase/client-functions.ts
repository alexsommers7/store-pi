import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cache } from 'react';

export const getColumnsWithType = cache(async (table: string) => {
  const supabase = createClientComponentClient();

  return await supabase.rpc('get_cols_with_type', { tname: table });
});
