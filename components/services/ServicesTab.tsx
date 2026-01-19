'use client';
import { useState } from 'react';

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
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          placeholder="Facility ID (optional)"
          value={facilityId}
          onChange={(e) => setFacilityId(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-96"
        />
        <button
          onClick={fetchServices}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Fetch Services
        </button>
      </div>

      {loading && <p className="text-sm text-gray-500">Loading...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="grid gap-4">
        {services.map((service) => (
          <div key={service.id} className="border rounded p-4">
            <p className="font-medium">{service.name}</p>
            <p className="text-xs text-gray-500">
              Facility ID: {service.facility_id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
