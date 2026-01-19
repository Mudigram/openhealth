import { Button } from "@/components/ui/Button"

interface TabsProps {
    activeTab: string
    onTabChange: (tab: any) => void
}

export default function ExplorerTabs({ activeTab, onTabChange }: TabsProps) {
    const tabs = ['facilities', 'services', 'emergency', 'locations']

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
