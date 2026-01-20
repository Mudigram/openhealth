'use client'

import { useState } from 'react'
import JsonResponseViewer from './JsonResponseViewer'
import { Button } from "@/components/ui/Button"
import { Select } from "@/components/ui/Select"
import { Input } from "@/components/ui/Input"
import dynamic from 'next/dynamic'
import StatsPanel from './StatsPanel'
import Skeleton from '@/components/ui/Skeleton'

// Dynamically import MapPanel to avoid SSR issues with Leaflet
const MapPanel = dynamic(() => import('./MapPanel'), {
    ssr: false,
    loading: () => <Skeleton className="h-100 w-full" />
})

export default function FacilitiesPanel() {
    const [state, setState] = useState('')
    const [facilityType, setFacilityType] = useState('')
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [viewMode, setViewMode] = useState<'list' | 'map'>('list')

    async function runRequest() {
        setLoading(true)
        const params = new URLSearchParams()
        if (state) params.append('state', state)
        if (facilityType) params.append('facility_type', facilityType)

        try {
            const res = await fetch(`/api/v1/facilities?${params.toString()}`)
            const json = await res.json()
            setData(json)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex h-full flex-col gap-6">
            {/* Stats Dashboard */}
            <StatsPanel />

            <div className="flex h-full flex-col gap-6 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Facilities</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Discover healthcare facilities across Nigeria.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            variant={viewMode === 'list' ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setViewMode('list')}
                        >
                            List
                        </Button>
                        <Button
                            variant={viewMode === 'map' ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setViewMode('map')}
                        >
                            Map
                        </Button>
                    </div>
                </div>


                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
                    <Input
                        placeholder="State (e.g. Oyo)"
                        value={state}
                        onChange={e => setState(e.target.value)}
                        className="bg-white dark:bg-zinc-900"
                    />


                    <Select
                        value={facilityType}
                        onChange={e => setFacilityType(e.target.value)}
                        className="bg-white dark:bg-zinc-900"
                    >
                        <option value="">All facility types</option>
                        <option value="hospital">Hospital</option>
                        <option value="clinic">Clinic</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="laboratory">Laboratory</option>
                    </Select>

                    <Button
                        onClick={runRequest}
                        disabled={loading}
                        className="w-full sm:w-auto"
                        variant="primary"
                    >
                        {loading ? 'Fetching...' : 'Run request'}
                    </Button>
                </div>

                <div className="flex-1 overflow-hidden rounded-lg border border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 min-h-100">
                    {loading ? (
                        <div className="p-4 space-y-4">
                            <Skeleton className="h-8 w-3/4" />
                            <Skeleton className="h-32 w-full" />
                        </div>
                    ) : (
                        viewMode === 'map' ? (
                            <MapPanel facilities={Array.isArray(data) ? data : data?.data || []} />
                        ) : (
                            <JsonResponseViewer data={data} />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
