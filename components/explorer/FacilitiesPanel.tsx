'use client'


import { useState } from 'react'
import JsonResponseViewer from './JsonResponseViewer'


export default function FacilitiesPanel() {
const [state, setState] = useState('')
const [facilityType, setFacilityType] = useState('')
const [data, setData] = useState<any>(null)
const [loading, setLoading] = useState(false)


async function runRequest() {
setLoading(true)
const params = new URLSearchParams()
if (state) params.append('state', state)
if (facilityType) params.append('facility_type', facilityType)


const res = await fetch(`/api/v1/facilities?${params.toString()}`)
const json = await res.json()
setData(json)
setLoading(false)
}


return (
<div className="rounded-md border bg-white p-6">
<h2 className="mb-1 text-lg font-medium">Facilities</h2>
<p className="mb-4 text-sm text-gray-500">
Discover healthcare facilities across Nigeria.
</p>


<div className="mb-4 flex flex-col gap-3 sm:flex-row">
<input
placeholder="State (e.g. Oyo)"
value={state}
onChange={e => setState(e.target.value)}
className="w-full rounded-md border px-3 py-2 text-sm"
/>


<select
value={facilityType}
onChange={e => setFacilityType(e.target.value)}
className="w-full rounded-md border px-3 py-2 text-sm"
>
<option value="">All facility types</option>
<option value="hospital">Hospital</option>
<option value="clinic">Clinic</option>
<option value="pharmacy">Pharmacy</option>
<option value="laboratory">Laboratory</option>
</select>
</div>


<button
onClick={runRequest}
disabled={loading}
className="mb-6 rounded-md bg-black px-4 py-2 text-sm text-white"
>
{loading ? 'Loading…' : 'Run request'}
</button>


<JsonResponseViewer data={data} />
</div>
)
}