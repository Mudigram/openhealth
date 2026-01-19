'use client'


import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import ExplorerTabs from '@/components/explorer/ExplorerTabs'
import EndpointPanel from '@/components/explorer/EndpointPanel'


export default function ExplorerPage() {
const [activeTab, setActiveTab] = useState<'facilities' | 'services' | 'emergency' | 'locations'>('facilities')


return (
<AppShell>
<ExplorerTabs activeTab={activeTab} onTabChange={setActiveTab} />
<EndpointPanel activeTab={activeTab} />
</AppShell>
)
}