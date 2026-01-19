"use client"

import AppShell from "@/components/layout/AppShell"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default function DocsPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-4xl space-y-12 pb-20">

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400">
            Version 1.0.0
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">API Documentation</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            OpenHealth NG provides a public, free-to-use API for accessing healthcare facility data across Nigeria.
            Designed for developers, researchers, and civic tech organizations.
          </p>
          <div className="flex gap-4">
            <Link href="/explorer">
              <Button>Try the Explorer</Button>
            </Link>
            <Link href="#endpoints">
              <Button variant="outline">View Endpoints</Button>
            </Link>
          </div>
        </div>

        <hr className="border-zinc-200 dark:border-zinc-800" />

        {/* Architecture Section - Recruiter Friendly */}
        <section id="architecture" className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">System Architecture</h2>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <p className="mb-6 text-zinc-600 dark:text-zinc-400">
              Built with modern web technologies focusing on performance, type safety, and scalability.
              The system follows a RESTful architecture with a backend-for-frontend (BFF) pattern using Next.js App Router.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Frontend / API Layer</h3>
                <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                  <li>Next.js 15 (App Router)</li>
                  <li>React Server Components</li>
                  <li>TypeScript (Strict Mode)</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>

              <div className="flex items-center justify-center text-zinc-300 dark:text-zinc-700">
                <svg className="h-6 w-6 rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Data & Infrastructure</h3>
                <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                  <li>Supabase (PostgreSQL)</li>
                  <li>Row Level Security (RLS)</li>
                  <li>Edge Caching</li>
                  <li>Vercel Deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-200 dark:border-zinc-800" />

        {/* Base URL */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Base URL</h2>
          <div className="relative rounded-lg bg-zinc-950 p-4 font-mono text-sm text-zinc-50">
            <span className="text-teal-400">https://openhealth-ng.vercel.app/api/v1</span>
          </div>
          <p className="text-sm text-zinc-500">All responses are in JSON format.</p>
        </section>

        {/* Endpoints */}
        <section id="endpoints" className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Endpoints</h2>

          {/* Facilities */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50">Health Facilities</h3>
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="bg-zinc-50 p-4 border-b border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 flex items-center gap-3">
                <span className="rounded bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">GET</span>
                <code className="text-sm">/facilities</code>
              </div>
              <div className="p-4 space-y-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Retrieve a list of healthcare facilities. Supports filtering.</p>

                <div>
                  <h4 className="text-xs font-semibold uppercase text-zinc-500 mb-2">Query Parameters</h4>
                  <ul className="text-sm space-y-2">
                    <li className="grid grid-cols-[120px_1fr] gap-4">
                      <code className="text-teal-600 dark:text-teal-400">state</code>
                      <span className="text-zinc-600 dark:text-zinc-400">Filter by Nigerian state (e.g. "Lagos")</span>
                    </li>
                    <li className="grid grid-cols-[120px_1fr] gap-4">
                      <code className="text-teal-600 dark:text-teal-400">facility_type</code>
                      <span className="text-zinc-600 dark:text-zinc-400">Filter by type (hospital, clinic, pharmacy, laboratory)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50">Services</h3>
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="bg-zinc-50 p-4 border-b border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 flex items-center gap-3">
                <span className="rounded bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">GET</span>
                <code className="text-sm">/services</code>
              </div>
              <div className="p-4 space-y-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">List available medical services found in the registry.</p>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-zinc-500 mb-2">Query Parameters</h4>
                  <ul className="text-sm space-y-2">
                    <li className="grid grid-cols-[120px_1fr] gap-4">
                      <code className="text-teal-600 dark:text-teal-400">facility_id</code>
                      <span className="text-zinc-600 dark:text-zinc-400">Get services specific to a facility UUID</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50">Emergency Contacts</h3>
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="bg-zinc-50 p-4 border-b border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 flex items-center gap-3">
                <span className="rounded bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">GET</span>
                <code className="text-sm">/emergency</code>
              </div>
              <div className="p-4 space-y-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Get a list of emergency response numbers (Ambulance, Fire, Police).</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-200 dark:border-zinc-800" />

        <section className="bg-zinc-50 p-8 rounded-2xl dark:bg-zinc-900/50">
          <h2 className="text-xl font-semibold mb-4">Contributing</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            OpenHealth NG is open source. Contributors are welcome to help improve data accuracy and API coverage.
          </p>
          <Link href="https://github.com/Mudigram/openhealth">
            <Button variant="outline">View Repository</Button>
          </Link>
        </section>

      </div>
    </AppShell>
  )
}
