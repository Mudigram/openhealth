import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const facilityId = searchParams.get('facility_id')

  let query = supabaseServer.from('services').select('*')

  if (facilityId) {
    query = query.eq('facility_id', facilityId)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data })
}
