'use client';
import { useEffect, useState } from 'react';
import { Select } from "@/components/ui/Select";

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
    <div className="flex flex-col gap-6 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Locations</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Browse Nigerian States and LGAs.
        </p>
      </div>

      <div className="w-full sm:w-64">
        <Select
          className="bg-white dark:bg-zinc-900"
          onChange={(e) => fetchLgas(e.target.value)}
          value={selectedState}
        >
          <option value="">Select State</option>
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </Select>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
        <h3 className="mb-4 text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
          {selectedState ? `LGAs in ${selectedState}` : 'Select a state to view LGAs'}
        </h3>
        {selectedState && lgas.length > 0 ? (
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {lgas.map(lga => (
              <li key={lga} className="truncate rounded border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                {lga}
              </li>
            ))}
          </ul>
        ) : (
          selectedState && <p className="text-sm text-zinc-500">No LGAs found for this state.</p>
        )}
      </div>
    </div>
  );
}
