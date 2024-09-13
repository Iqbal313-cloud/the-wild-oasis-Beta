import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jistleobwembmrmeskdj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imppc3RsZW9id2VtYm1ybWVza2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5ODcxNzQsImV4cCI6MjA0MTU2MzE3NH0.humYO50rBUxo7XrJ3E1Y-iBpV1MJw7aky9YFLYydDK8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
