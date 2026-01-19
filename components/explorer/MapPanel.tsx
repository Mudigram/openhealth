'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useState, useEffect } from 'react';

// Fix for default marker icon in Leaflet with Next.js
const defaultIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

interface Facility {
    id: string;
    name: string;
    facility_type: string;
    address: string;
    state: string;
    // Simulating coordinates for the demo if not in API
    lat?: number;
    lng?: number;
}

export default function MapPanel({ facilities }: { facilities: Facility[] }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Center of Nigeria
    const center: [number, number] = [9.0820, 8.6753];

    if (!isMounted) return <div className="h-[400px] w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 animate-pulse" />;

    return (
        <div className="h-[400px] w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
            <MapContainer center={center} zoom={6} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {facilities.map((facility, index) => {
                    // Generate pseudo-random coordinates based on facility ID or index if missing
                    // This is strictly for DEMO purposes to show the map working.
                    // Real implementation requires actual lat/long columns.
                    const lat = facility.lat || 9.0820 + (Math.random() * 4 - 2);
                    const lng = facility.lng || 8.6753 + (Math.random() * 4 - 2);

                    return (
                        <Marker key={facility.id} position={[lat, lng]} icon={defaultIcon}>
                            <Popup>
                                <div className="text-sm">
                                    <h3 className="font-bold">{facility.name}</h3>
                                    <p>{facility.facility_type}</p>
                                    <p className="text-xs text-gray-500">{facility.address}</p>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
}
