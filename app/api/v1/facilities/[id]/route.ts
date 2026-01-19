import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const { data, error } = await supabaseServer
    .from("facilities")
    .select(`
      id,
      name,
      facility_type,
      ownership,
      state,
      lga,
      address,
      facility_services (
        services ( name )
      )
    `)
    .eq("id", id)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: "Facility not found" },
      { status: 404 }
    );
  }

  const normalized = {
    id: data.id,
    name: data.name,
    facility_type: data.facility_type,
    ownership: data.ownership,
    state: data.state,
    lga: data.lga,
    address: data.address,
    services: data.facility_services.map(
      (fs: any) => fs.services.name
    ),
  };

  return NextResponse.json(normalized);
}
