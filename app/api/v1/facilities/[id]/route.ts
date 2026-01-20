import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import { FacilityService } from "@/types/openhealth";

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
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
      (fs: FacilityService) => {
        if (Array.isArray(fs.services)) {
          return fs.services[0]?.name;
        }
        return fs.services?.name;
      }
    ),
  };

  return NextResponse.json(normalized);
}
