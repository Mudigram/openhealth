'use client';
import { useEffect, useState } from 'react';

export default function LocationsTab() {
  const [states, setStates] = useState<string[]>([]);
  const [lgas, setLgas] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    fetch('/api/v1/locations/states')
      .then(res => res.json())
      .then(data => setStates(data.data || []));
  }, []);

  async function fetchLgas(state: string) {
    setSelectedState(state);
    const res = await fetch(`/api/v1/locations/lgas?state=${state}`);
    const data = await res.json();
    setLgas(data.data || []);
  }

  return (
    <div className="space-y-6">
      <select
        className="border px-3 py-2 rounded w-full md:w-64"
        onChange={(e) => fetchLgas(e.target.value)}
        value={selectedState}
      >
        <option value="">Select State</option>
        {states.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {lgas.map(lga => (
          <li key={lga} className="border rounded px-3 py-2 text-sm">
            {lga}
          </li>
        ))}
      </ul>
    </div>
  );
}
