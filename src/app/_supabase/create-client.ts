import { createClient } from '@supabase/supabase-js';

const options = {
  auth: {
    autoRefreshToken: true,
    persistSession: process.env.VERCEL_ENV !== 'development',
  },
};

export default createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  options
);
