import { ReactNode } from 'react'


export default function AppShell({ children }: { children: ReactNode }) {
return (
<div className="min-h-screen bg-gray-50 text-gray-900">
<header className="border-b bg-white">
<div className="mx-auto max-w-5xl px-4 py-4">
<h1 className="text-xl font-semibold">OpenHealth NG</h1>
<p className="text-sm text-gray-500">Public Healthcare API Explorer</p>
</div>
</header>


<main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
</div>
)
}