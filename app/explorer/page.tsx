'use client'


import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import ExplorerTabs from '@/components/explorer/ExplorerTabs'
import EndpointPanel from '@/components/explorer/EndpointPanel'
import { Button } from '@/components/ui/Button'
import ApiInfoTab from '@/components/api/ApiInfoTab'
import { ChevronDown, ChevronUp } from 'lucide-react'


export default function ExplorerPage() {
    const [activeTab, setActiveTab] = useState<'facilities' | 'services' | 'emergency' | 'locations'>('facilities')
    const [showInfo, setShowInfo] = useState(false)


    return (
        <AppShell>
            <div className="mb-6 flex items-center justify-between">
                <ExplorerTabs activeTab={activeTab} onTabChange={setActiveTab} />

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowInfo(!showInfo)}
                    className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                    {showInfo ? 'Hide Quick Info' : 'Show Quick Info'}
                </Button>
            </div>

            {showInfo && (
                <div className="mb-6 rounded-xl border border-teal-200 bg-teal-50 p-6 dark:border-teal-900/50 dark:bg-teal-950/20">
                    <h3 className="mb-4 font-semibold text-teal-900 dark:text-teal-50">API Reference</h3>
                    <ApiInfoTab />
                </div>
            )}

            <EndpointPanel activeTab={activeTab} />
        </AppShell>
    )
}
