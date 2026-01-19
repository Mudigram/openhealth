import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const state = searchParams.get('state')

  if (!state) {
    const { data, error } = await supabaseServer
      .from('locations')
      .select('state')
      .neq('state', null)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    const states = [...new Set(data.map(item => item.state))]

    return NextResponse.json({ data: states })
  }

  const { data, error } = await supabaseServer
    .from('locations')
    .select('lga')
    .eq('state', state)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data })
}
