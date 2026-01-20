import { NextResponse } from "next/server";
import { FacilityRow } from "@/types/openhealth";

import { supabaseServer } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const state = searchParams.get("state");
  const service = searchParams.get("service");

  console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

  let query = supabaseServer
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
    `);

  if (state) {
    query = query.eq("state", state);
  }

  if (service) {
    query = query.eq("facility_services.services.name", service);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Supabase Query Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch facilities" },
      { status: 500 }
    );
  }

  const normalized = (data as unknown as FacilityRow[]).map((facility) => ({
    id: facility.id,
    name: facility.name,
    facility_type: facility.facility_type,
    ownership: facility.ownership,
    state: facility.state,
    lga: facility.lga,
    address: facility.address,
    services: facility.facility_services.map((fs) => {
      if (Array.isArray(fs.services)) {
        return fs.services[0]?.name;
      }
      return fs.services?.name;
    }),
  }));

  return NextResponse.json(normalized);
}


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, type, address } = body;

    // Basic validation (very important)
    if (!name || !type) {
      return NextResponse.json(
        { error: 'name and type are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseServer
      .from('facilities')
      .insert([{ name, type, address }])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to create facility' },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error('POST /facilities error:', err);
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
