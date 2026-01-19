import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase/server'

export async function GET() {
  const { data, error } = await supabaseServer
    .from('facilities')
    .select('state')

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const states = Array.from(
    new Set(data.map(item => item.state))
  ).sort()

  return NextResponse.json({
    data: states,
    meta: { count: states.length }
  })
}
