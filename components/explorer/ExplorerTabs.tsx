interface TabsProps {
activeTab: string
onTabChange: (tab: any) => void
}


export default function ExplorerTabs({ activeTab, onTabChange }: TabsProps) {
const tabs = ['facilities', 'services', 'emergency', 'locations']


return (
<div className="mb-6 flex gap-2 overflow-x-auto">
{tabs.map(tab => (
<button
key={tab}
onClick={() => onTabChange(tab)}
className={`rounded-md px-4 py-2 text-sm capitalize ${
activeTab === tab
? 'bg-black text-white'
: 'bg-white border text-gray-700'
}`}
>
{tab}
</button>
))}
</div>
)
}