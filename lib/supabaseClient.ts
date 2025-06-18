import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) throw new Error('Missing Supabase URL')
if (!supabaseAnonKey) throw new Error('Missing Supabase anon key')
if (!supabaseServiceKey) throw new Error('Missing Supabase service role key')

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)

// Create a separate client for server-side operations that need elevated privileges
export const supabaseAdmin = createClient(supabaseUrl!, supabaseServiceKey!)