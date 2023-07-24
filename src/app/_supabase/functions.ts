import { cache } from 'react';
import supabase from '@/_supabase/create-client';

export const getColumnsWithType = cache(async (table: string) => {
  return await supabase.rpc('get_cols_with_type', { tname: table });
});
