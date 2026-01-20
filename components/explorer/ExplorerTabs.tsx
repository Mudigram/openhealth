import { Button } from "@/components/ui/Button"
import { ExplorerTab } from "@/types/openhealth"

interface TabsProps {
    activeTab: ExplorerTab
    onTabChange: (tab: ExplorerTab) => void
}

export default function ExplorerTabs({ activeTab, onTabChange }: TabsProps) {
    const tabs: ExplorerTab[] = ['facilities', 'services', 'emergency', 'locations']

    return (
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            {tabs.map(tab => (
                <Button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    variant={activeTab === tab ? 'primary' : 'outline'}
                    size="sm"
                    className="capitalize"
                >
                    {tab}
                </Button>
            ))}
        </div>
    )
}
