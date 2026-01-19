# OpenHealth NG

A public, read-only API for discovering healthcare facilities, services, and emergency resources across Nigeria.

OpenHealth NG is designed as **neutral public infrastructure**, not a consumer application. It exposes structured healthcare data through a versioned REST API, intended for developers, researchers, civic technologists, and organizations building health-related tools.

---

## Project Goals

* Provide a **single, consistent interface** for accessing healthcare-related public data in Nigeria
* Demonstrate **backend-first system design** and real-world data modeling
* Build for **unknown consumers**, not a predefined frontend
* Keep the system **simple, stable, and reusable**

This project intentionally avoids features like authentication, user accounts, dashboards, or appointments.

---

## Design Principles

### API-First

The API is the product. Any frontend or client application is considered a consumer, not a core dependency.

### Public Read Access

All endpoints are publicly readable. Data mutation is restricted and intended only for controlled ingestion or administrative pipelines.

### Real-World Data Modeling

Healthcare data is messy and incomplete. The schema and API are designed to tolerate partial coverage and incremental growth.

### Minimal Scope

Only essential entities are modeled to avoid overfitting the system:

* Health facilities
* Services
* Emergency contacts
* Geographic locations (derived)

---

## Base URL & Versioning

All endpoints are versioned.

```
/api/v1
```

Versioning ensures backward compatibility as the dataset and API evolve.

---

## Core Entities

### HealthFacility

Represents a physical healthcare location such as a hospital, clinic, pharmacy, or laboratory.

Key attributes:

* name
* facility_type (hospital, clinic, pharmacy, laboratory)
* ownership (public or private)
* address
* state
* lga
* optional geolocation (latitude, longitude)

---

### Service

Represents a healthcare service offered by a facility.

Examples:

* Emergency
* Maternity
* Diagnostics

Services are linked to facilities via foreign keys.

---

### EmergencyContact

Represents emergency phone numbers at national or state level.

Examples:

* Nigeria Police Force
* State emergency response lines
* Ambulance services

---

### Location

Locations are **derived**, not stored as a standalone table.

* States and LGAs are inferred from existing healthcare facilities
* This prevents duplication and ensures geographic data reflects actual infrastructure presence

---

## Endpoints

### Health Facilities

#### List facilities

```
GET /api/v1/facilities
```

Query parameters:

* state (optional)
* lga (optional)
* facility_type (optional)

Example:

```
GET /api/v1/facilities?state=Lagos&facility_type=hospital
```

---

#### Get facility by ID

```
GET /api/v1/facilities/{id}
```

---

#### Create facility (restricted)

```
POST /api/v1/facilities
```

Used for controlled data ingestion. Not intended for public use.

---

### Services

#### List services

```
GET /api/v1/services
```

Optional query:

* facility_id

---

#### Create service (restricted)

```
POST /api/v1/services
```

---

### Emergency Contacts

#### List emergency contacts

```
GET /api/v1/emergency-contacts
```

Optional query:

* state

---

#### Create emergency contact (restricted)

```
POST /api/v1/emergency-contacts
```

---

### Locations

#### List states

```
GET /api/v1/locations/states
```

Returns states where at least one healthcare facility exists.

---

#### List LGAs by state

```
GET /api/v1/locations/lgas?state=Oyo
```

---

## Response Format

Successful responses:

```json
{
  "data": [...],
  "meta": {
    "version": "v1"
  }
}
```

Error responses:

```json
{
  "error": "Resource not found"
}
```

---

## Data Coverage & Limitations

* Data is **not exhaustive**
* Coverage varies by state and facility type
* Emergency contact information may change over time

OpenHealth NG is designed to grow incrementally rather than claim completeness.

---

## Technology Stack

* Next.js (App Router)
* Supabase (PostgreSQL + Row Level Security)
* RESTful API design

---

## Local Development

1. Clone the repository
2. Set environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

3. Run the development server

```
npm run dev
```

---

## Intended Use Cases

* Health discovery applications
* Civic technology projects
* Research and analysis
* Emergency response tools
* Data aggregation and visualization

---

## Scope Clarification

This project intentionally does **not** include:

* User accounts
* Authentication flows
* Appointment booking
* Admin dashboards

Those concerns are considered downstream applications.

---

## Status

OpenHealth NG is an active infrastructure prototype intended to demonstrate backend system design and public API architecture.
