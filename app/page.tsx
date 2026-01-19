import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-teal-500/30">

      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg shadow-teal-500/20" />
            <span className="text-lg font-semibold tracking-tight">OpenHealth NG</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-zinc-400 md:flex">
            <Link href="/explorer" className="transition-colors hover:text-white">Explorer</Link>
            <Link href="/api/docs" className="transition-colors hover:text-white">API Docs</Link>
            <Link href="https://github.com/Mudigram/openhealth" target="_blank" className="transition-colors hover:text-white">GitHub</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/explorer">
              <Button size="sm" variant="outline" className="hidden sm:inline-flex border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:text-white">
                Console
              </Button>
            </Link>
            <Link href="/explorer">
              <Button size="sm" variant="primary" className="bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-900/20">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-zinc-950 to-zinc-950" />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="inline-flex w-fit items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300">
                  <span className="mr-2 flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                  </span>
                  v1.0 Public Beta Live
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-[1.1]">
                  Digital Infrastructure for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Nigeria's Healthcare</span>
                </h1>

                <p className="max-w-xl text-lg text-zinc-400 md:text-xl leading-relaxed">
                  A unified, public API for discovering hospitals, clinics, and emergency services across Nigeria. Built for developers, researchers, and civic tech.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4">
                  <Link href="/explorer">
                    <Button size="lg" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white shadow-xl shadow-teal-900/20">
                      Explore the Data
                    </Button>
                  </Link>
                  <Link href="/api/docs">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white">
                      Read Documentation
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-6 pt-8 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Open Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>RESTful API</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Geo-tagged</span>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 shadow-2xl backdrop-blur-sm">
                  {/* Placeholder for the hero image we generated */}
                  <Image
                    src="/hero-image.png"
                    alt="OpenHealth NG Connectivity"
                    fill
                    className="object-cover opacity-90 transition-opacity duration-700 hover:opacity-100"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-teal-500/20 blur-[100px]" />
                <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-emerald-500/20 blur-[100px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="bg-zinc-950 py-24 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-white/5 p-8 transition-colors hover:border-teal-500/30 hover:bg-white/[0.07]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/20 text-teal-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Comprehensive Registry</h3>
                <p className="text-zinc-400">Access a growing database of healthcare facilities, categorized by type, ownership, and services offered.</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/5 p-8 transition-colors hover:border-teal-500/30 hover:bg-white/[0.07]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/20 text-teal-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Location Services</h3>
                <p className="text-zinc-400">Query facilities by State and LGA. Integrate with mapping tools using geolocation coordinates.</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/5 p-8 transition-colors hover:border-teal-500/30 hover:bg-white/[0.07]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/20 text-teal-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Real-time Availability</h3>
                <p className="text-zinc-400">Designed for high availability. Fetch emergency contacts and service details instantly.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-zinc-950 py-12">
        <div className="container mx-auto px-6 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} OpenHealth NG. Open Source Public Infrastructure.</p>
        </div>
      </footer>
    </div>
  );
}
