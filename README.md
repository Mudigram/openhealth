# OpenHealth NG

A public, read-only API and Explorer for discovering healthcare facilities, services, and emergency resources across Nigeria.

OpenHealth NG is designed as **neutral public infrastructure**. It exposes structured healthcare data through a versioned REST API and a modern web explorer, intended for developers, researchers, and civic tech organizations.

## Features

### Public API
- **RESTful Endpoints**: Predictable, versioned API (`/api/v1`) for accessing data.
- **Comprehensive Data**: Search for Hospitals, Clinics, Pharmacies, and Laboratories.
- **Emergency Resources**: Access national and state-level emergency contact numbers.
- **Location Services**: Filter data by State and Local Government Area (LGA).

### Data Explorer
- **Interactive Map**: Visualize facility locations across Nigeria using dynamic mapping.
- **Live Stats Dashboard**: View real-time counts of facilities and coverage.
- **Dark Mode**: Fully accessible UI with light and dark themes.
- **Developer Tools**: localized API reference and debugging tools.

---

## Project Goals

* Provide a **single, consistent interface** for accessing healthcare-related public data in Nigeria.
* Demonstrate **backend-first system design** with a polished frontend "Explorer" for verification.
* Build for **unknown consumers**, not just a single app.
* Keep the system **simple, stable, and reusable**.

---

## Technology Stack

* **Framework**: Next.js 15 (App Router)
* **Language**: TypeScript
* **Database**: Supabase (PostgreSQL + RLS)
* **Styling**: Tailwind CSS + Shadcn-like UI
* **Mapping**: React-Leaflet
* **Deployment**: Vercel

---

## API Documentation

Full documentation is available at: [https://openhealth-ng.vercel.app/api/docs](https://openhealth-ng.vercel.app/api/docs)

### Core Endpoints

| Resource | Method | Endpoint | Description |
|----------|--------|----------|-------------|
| Facilities | `GET` | `/api/v1/facilities` | List healthcare facilities |
| Services | `GET` | `/api/v1/services` | List medical services |
| Emergency | `GET` | `/api/v1/emergency` | Emergency contact numbers |
| Locations | `GET` | `/api/v1/locations/states` | List coverage states |

---

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mudigram/openhealth.git
   cd openhealth
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set environment variables**
   Create a `.env.local` file with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the Explorer.
Open [http://localhost:3000/api/docs](http://localhost:3000/api/docs) to view the API Docs.

---

## Contributing

OpenHealth NG is open source. We welcome contributions to improve data accuracy, add new regions, or enhance the API capabilities.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Scope Clarification

This project intentionally does **not** include:
* User accounts
* Authentication flows
* Appointment booking
* Admin dashboards

Those concerns are considered downstream applications. OpenHealth NG is the **infrastructure layer**.
