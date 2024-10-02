import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jistleobwembmrmeskdj.supabase.co";
const supabaseKey = "Enter your supabase key here";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
