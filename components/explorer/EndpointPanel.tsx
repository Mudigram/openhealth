import FacilitiesPanel from "./FacilitiesPanel"
import EmergencyContactsTab from "../emergency/EmergencyContactsTab"
import LocationsTab from "../locations/LocationTab"
import ServicesTab from "../services/ServicesTab"


export default function EndpointPanel({ activeTab }: { activeTab: string }) {
if (activeTab === 'facilities') return <FacilitiesPanel />
if (activeTab === 'emergency') return <EmergencyContactsTab />
if (activeTab === 'locations') return <LocationsTab />
if (activeTab === 'services') return <ServicesTab />

return (
<div className="rounded-md border bg-white p-6 text-gray-500">
Endpoint coming soon
</div>
)
}