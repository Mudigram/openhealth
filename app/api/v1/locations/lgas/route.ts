import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const state = searchParams.get('state')

  if (!state) {
    return NextResponse.json(
      { error: 'state query parameter is required' },
      { status: 400 }
    )
  }

  const { data, error } = await supabaseServer
    .from('facilities')
    .select('lga')
    .eq('state', state)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const lgas = Array.from(
    new Set(data.map(item => item.lga))
  ).sort()

  return NextResponse.json({
    data: lgas,
    meta: { state, count: lgas.length }
  })
}
