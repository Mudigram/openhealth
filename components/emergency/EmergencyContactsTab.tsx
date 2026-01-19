'use client';
import { useState } from 'react';


type EmergencyContact = {
id: string;
service_name: string;
phone: string;
state: string;
is_national: boolean;
};


export default function EmergencyContactsTab() {
const [stateFilter, setStateFilter] = useState('');
const [contacts, setContacts] = useState<EmergencyContact[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);


async function fetchContacts() {
setLoading(true);
setError(null);


const params = new URLSearchParams();
if (stateFilter) params.append('state', stateFilter);


try {
const res = await fetch(`/api/v1/emergency?${params.toString()}`);
if (!res.ok) throw new Error('Failed to fetch emergency contacts');
const data = await res.json();
setContacts(data.data || []);
} catch (err: any) {
setError(err.message);
} finally {
setLoading(false);
}
}


return (
<div className="space-y-6">
<div className="flex flex-col md:flex-row gap-4">
<input
type="text"
placeholder="Filter by state (optional)"
value={stateFilter}
onChange={(e) => setStateFilter(e.target.value)}
className="border rounded px-3 py-2 w-full md:w-64"
/>
<button
onClick={fetchContacts}
className="bg-black text-white px-4 py-2 rounded"
>
Fetch Emergency Contacts
</button>
</div>


{loading && <p className="text-sm text-gray-500">Loading...</p>}
{error && <p className="text-sm text-red-600">{error}</p>}


{!loading && contacts.length === 0 && (
<p className="text-sm text-gray-500">No emergency contacts found.</p>
)}


<div className="grid gap-4">
{contacts.map((contact) => (
<div
key={contact.id}
className="border rounded p-4 flex flex-col gap-1"
>
<h3 className="font-medium">{contact.service_name}</h3>
<p className="text-sm">Phone: {contact.phone}</p>
<p className="text-sm">State: {contact.state}</p>
{contact.is_national && (
<span className="text-xs text-green-700">National Service</span>
)}
</div>
))}
</div>
</div>
);
}