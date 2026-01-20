'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

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
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-6 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Emergency Contacts</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Find emergency numbers and response lines.
                </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
                <Input
                    type="text"
                    placeholder="Filter by state (optional)"
                    value={stateFilter}
                    onChange={(e) => setStateFilter(e.target.value)}
                    className="w-full sm:w-64 bg-white dark:bg-zinc-900"
                />
                <Button
                    onClick={fetchContacts}
                    disabled={loading}
                    variant="primary"
                    className="w-full sm:w-auto"
                >
                    {loading ? 'Fetching...' : 'Fetch Contacts'}
                </Button>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {!loading && contacts.length === 0 && !error && (
                    <div className="col-span-full rounded-lg border border-dashed border-zinc-200 p-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
                        No emergency contacts found.
                    </div>
                )}
                {contacts.map((contact) => (
                    <div
                        key={contact.id}
                        className="flex flex-col gap-2 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
                    >
                        <div className="flex items-start justify-between">
                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{contact.service_name}</h3>
                            {contact.is_national && (
                                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                    National
                                </span>
                            )}
                        </div>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
                            <p>Phone: <a href={`tel:${contact.phone}`} className="font-medium text-teal-600 hover:underline dark:text-teal-400">{contact.phone}</a></p>
                            <p>State: {contact.state || 'N/A'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
