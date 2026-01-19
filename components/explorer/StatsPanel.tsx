'use client';

import { useEffect, useState } from 'react';
import Skeleton from "@/components/ui/Skeleton";

interface Stats {
    totalFacilities: number;
    totalServices: number;
    totalStates: number;
}

export default function StatsPanel() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real app, this would be a dedicated endpoint /api/v1/stats
        // For now, we will aggregate from concurrent fetches to make it "live" enough
        async function calculateStats() {
            try {
                const [facilitiesRes, servicesRes, statesRes] = await Promise.all([
                    fetch('/api/v1/facilities'),
                    fetch('/api/v1/services'),
                    fetch('/api/v1/locations/states')
                ]);

                const facilities = await facilitiesRes.json();
                const services = await servicesRes.json();
                const states = await statesRes.json();

                setStats({
                    totalFacilities: Array.isArray(facilities) ? facilities.length : facilities.data?.length || 0,
                    totalServices: Array.isArray(services) ? services.length : services.data?.length || 0,
                    totalStates: Array.isArray(states) ? states.length : states.data?.length || 0,
                });
            } catch (error) {
                console.error("Failed to fetch stats", error);
                // Fallback or error state
                setStats({ totalFacilities: 0, totalServices: 0, totalStates: 0 });
            } finally {
                setLoading(false);
            }
        }

        calculateStats();
    }, []);

    if (loading) {
        return (
            <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-24 w-full rounded-xl" />
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-4 mb-6">
            <StatCard
                label="Registered Facilities"
                value={stats?.totalFacilities || 0}
                icon={
                    <svg className="h-5 w-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                }
            />
            <StatCard
                label="Medical Services"
                value={stats?.totalServices || 0}
                icon={
                    <svg className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                }
            />
            <StatCard
                label="States Covered"
                value={stats?.totalStates || 0}
                icon={
                    <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                }
            />
        </div>
    );
}

function StatCard({ label, value, icon }: { label: string, value: number, icon: React.ReactNode }) {
    return (
        <div className="flex flex-col items-start p-4 rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950/50">
            <div className="mb-2 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900">
                {icon}
            </div>
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{value.toLocaleString()}</span>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{label}</span>
        </div>
    )
}
