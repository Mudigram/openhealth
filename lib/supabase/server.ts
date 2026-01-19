import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Missing Supabase server environment variables");
}

export const supabaseServer = createClient(
  supabaseUrl,
  serviceRoleKey
);

function logToFile(message: string) {
  const logFilePath = path.join(process.cwd(), "supabase-connection.log");
  const timestamp = new Date().toISOString();
  fs.appendFileSync(logFilePath, `[${timestamp}] ${message}\n`);
}

export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabaseServer.from("facilities").select("id").limit(1);

    if (error) {
      const errorMessage = `Supabase connection test failed: ${JSON.stringify(error)}`;
      console.error(errorMessage);
      logToFile(errorMessage);
      return { success: false, error };
    }

    const successMessage = `Supabase connection test succeeded: ${JSON.stringify(data)}`;
    console.log(successMessage);
    logToFile(successMessage);
    return { success: true, data };
  } catch (err) {
    const unexpectedErrorMessage = `Unexpected error during Supabase connection test: ${err}`;
    console.error(unexpectedErrorMessage);
    logToFile(unexpectedErrorMessage);
    return { success: false, error: err };
  }
}
