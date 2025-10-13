import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hxscuqqjynfpkuedzitl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4c2N1cXFqeW5mcGt1ZWR6aXRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNzU3MjUsImV4cCI6MjA3NTk1MTcyNX0.UluGmXJ_om3gJZLqwgC_SdPk_U3MgAIRHWTgSpz378M";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
