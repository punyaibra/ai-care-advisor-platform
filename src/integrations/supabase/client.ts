
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = 'https://wgtjaifclvgmdkjsrbim.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndndGphaWZjbHZnbWRranNyYmltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNDQ1NDgsImV4cCI6MjA2NjkyMDU0OH0.Mt-M1koiSxvSLemn7-Xif4XCxHhjXMmFti-oqVyZhfU'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
