'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type Service = {
  id: string;
  name: string;
  facility_id: string;
};

export default function ServicesTab() {
  const [facilityId, setFacilityId] = useState('');
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchServices() {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (facilityId) params.append('facility_id', facilityId);

    try {
      const res = await fetch(`/api/v1/services?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to fetch services');
      const data = await res.json();
      setServices(data.data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Services</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Search for medical services by facility.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Input
          placeholder="Facility ID (optional)"
          value={facilityId}
          onChange={(e) => setFacilityId(e.target.value)}
          className="w-full sm:w-96 bg-white dark:bg-zinc-900"
        />
        <Button
          onClick={fetchServices}
          disabled={loading}
          variant="primary"
          className="w-full sm:w-auto"
        >
          {loading ? 'Fetching...' : 'Fetch Services'}
        </Button>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.length === 0 && !loading && !error && (
          <div className="col-span-full rounded-lg border border-dashed border-zinc-200 p-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
            No services found. Try running a search.
          </div>
        )}
        {services.map((service) => (
          <div key={service.id} className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
            <p className="font-medium text-zinc-900 dark:text-zinc-50">{service.name}</p>
            <p className="mt-1 text-xs text-zinc-500">
              Facility ID: <span className="font-mono">{service.facility_id}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
