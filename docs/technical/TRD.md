# STHAYU VENTURES
## Technical Requirements Document (TRD)

**Document Version:** 2.0 (Consolidated Single Source of Truth)  
**Date:** 29 August 2026  
**Status:** Canonical Technical Architecture & Production-SaaS Specification  
**Repository:** `pandeyastha640/STHAYU-VENTURES-WEBSITE`  
**Supersedes:** `Sthayu_Ventures_TRD_v1.0.md`, `Sthayu_Ventures_TRD_v1.1.md`  

---

## 1. Technical Objective & Engineering Principles

The primary technical objective is to architect and operate a resilient, scalable, multi-tenant AI + Automation platform that delivers both high-touch client solutions and a self-service subscription SaaS.

### Core Architectural Principles
1. **Preserve the Marketing Experience:** The current Vite + React 19 marketing site represents the brand visual baseline. Technical expansion must not degrade or break this experience.
2. **Modular Decoupling:** The customer workspace (`/app` or `app.sthayuventures.com`) and backend API services are decoupled from the static marketing surface.
3. **Multi-Tenant Isolation by Design:** Multi-tenancy is enforced from day one in the data layer via `organization_id` column scoping and database Row-Level Security (RLS).
4. **Provider-Agnostic AI:** All generative AI interactions pass through a centralized service abstraction layer with automated fallback, token metering, and structured validation.
5. **Asynchronous Automation Execution:** Long-running workflows, external API integrations, and webhook dispatches run asynchronously via message queues (BullMQ/Redis) rather than blocking HTTP request cycles.
6. **Zero Exposed Secrets:** All API keys, database credentials, and payment secrets reside strictly on the server and are managed via secure environment/secret managers.

---

## 2. Current Codebase Architecture Snapshot

### 2.1 Technology Stack (Frontend Marketing Baseline)
- **Framework & Runtime:** React 19 (`react: ^19.2.8`, `react-dom: ^19.2.8`) on Vite 8 (`vite: ^8.2.0`).
- **Styling:** Tailwind CSS 4 (`@tailwindcss/vite: ^4.3.3`, `tailwindcss: ^4.3.3`) + custom CSS styling layers (`src/index.css`, `src/App.css`, `src/premium-restyle.css`).
- **Animations & Visuals:** GSAP 3 (`gsap: ^3.15.0`) with ScrollTrigger, Three.js (`three`), `@react-three/fiber`, `@react-three/drei`, Motion (`motion: ^13.1.1`, `framer-motion: ^13.1.1`).
- **Media & Icons:** `lucide-react: ^0.460.0`, `hls.js: ^1.7.1`.
- **Linting:** ESLint 10 with Flat Config (`eslint.config.js`).

### 2.2 Current Entry Flow
```text
index.html ──► src/main.jsx ──► src/index.css ──► src/App.jsx
                                                    │
    ┌───────────────────────────────────────────────┴───────────────────────────────────────────────┐
    │                                                                                               │
Persistent 3D / Ambient Layer                                                            Z-10 Interactive Container
(Cinematic3DBackground, AnimatedVisualization, etc.)                                                │
                                                                                 ┌──────────────────┴──────────────────┐
                                                                                 ▼                                     ▼
                                                                           Navbar.jsx                             Footer.jsx
                                                                                 │
                                                                                 ├─► Hero.jsx (Three.js Orb)
                                                                                 ├─► MediaShowcase.jsx
                                                                                 ├─► ProblemDiscovery.jsx
                                                                                 ├─► WhySthayu.jsx
                                                                                 ├─► Services.jsx
                                                                                 ├─► AIAgents.jsx
                                                                                 ├─► SystemStack.jsx
                                                                                 ├─► HowItWorks.jsx
                                                                                 ├─► Showcase.jsx
                                                                                 ├─► CaseStudies.jsx
                                                                                 ├─► InteractiveShowcase.jsx
                                                                                 ├─► PremiumPortfolioGallery.jsx
                                                                                 ├─► Pricing.jsx
                                                                                 ├─► AssessmentSection.jsx
                                                                                 └─► FinalCTA.jsx
```

---

## 3. Target Production Monorepo Architecture

To avoid dependency collision and enable parallel scaling across applications and services, the target production architecture adopts a pnpm monorepo layout:

```text
sthayu-ventures/
├── apps/
│   ├── marketing/              # Existing Vite + React 19 SPA (Preserved)
│   └── workspace/              # NEW: Customer Authenticated SaaS Dashboard (Next.js / Vite SPA)
├── services/
│   ├── api/                    # NEW: Core REST / WebSocket Backend (Node.js/Fastify + TypeScript)
│   ├── worker/                 # NEW: Background Job Execution Engine (BullMQ + Redis)
│   └── ai/                     # NEW: AI Provider Abstraction & RAG Pipeline
├── packages/
│   ├── types/                  # Shared TypeScript Interfaces, DTOs & Schemas
│   ├── database/               # Prisma / Drizzle Schema, Migrations & Client
│   ├── config/                 # Shared ESLint, TSConfig, and Tailwind Tokens
│   └── integrations/           # Standardized Connectors (WhatsApp, Resend, Razorpay, etc.)
├── infra/
│   ├── docker/                 # Local Dev Multi-Container Compose
│   └── terraform/              # Cloud Infrastructure as Code (Phase 5)
├── docs/                       # Canonical Documentation & ADRs
└── .github/
    └── workflows/              # Automated CI/CD Pipelines
```

---

## 4. Multi-Tenant Database Architecture (PostgreSQL)

### 4.1 Technology Choice
- **Primary Engine:** Managed PostgreSQL 16+ (e.g. AWS RDS / Supabase / Neon).
- **ORM / Query Builder:** Prisma or Drizzle ORM with strict TypeScript type generation.
- **Vector Storage:** `pgvector` extension for tenant knowledge base embeddings.

### 4.2 Multi-Tenant Isolation Strategy
- **Shared Database, Shared Schema with Row-Level Security (RLS):** Every tenant-owned table includes an indexed `organization_id UUID NOT NULL` foreign key.
- **Application Context Middleware:** Every authenticated request sets `SET LOCAL app.current_organization_id = '<org_id>'` ensuring queries never leak cross-tenant records.

### 4.3 Core Data Models (Entity Relationship Blueprint)
```text
┌─────────────────────────┐         ┌─────────────────────────┐
│      Organization       │1       *│          User           │
│─────────────────────────│─────────│─────────────────────────│
│ id: UUID (PK)           │         │ id: UUID (PK)           │
│ name: VARCHAR           │         │ email: VARCHAR (Unique) │
│ slug: VARCHAR (Unique)  │         │ password_hash: VARCHAR  │
│ tier: ENUM (Plan)       │         │ is_verified: BOOLEAN    │
│ created_at: TIMESTAMPTZ │         │ created_at: TIMESTAMPTZ │
└─────────────────────────┘         └─────────────────────────┘
             │                                   │
             │1                                  │1
             │                                   │
             ├─────────────────┐                 │
             │*                │*                │*
┌─────────────────────────┐  ┌─────────────────────────┐
│   OrganizationMember    │  │          Lead           │
│─────────────────────────│  │─────────────────────────│
│ id: UUID (PK)           │  │ id: UUID (PK)           │
│ organization_id: UUID   │  │ organization_id: UUID   │
│ user_id: UUID           │  │ email: VARCHAR          │
│ role: ENUM (Owner/Admin)│  │ business_type: VARCHAR  │
│ created_at: TIMESTAMPTZ │  │ score: INTEGER          │
└─────────────────────────┘  │ status: ENUM (New/Qual) │
             │               └─────────────────────────┘
             │1
             ├───────────────────────────────────┬───────────────────────────────────┐
             │*                                  │*                                  │*
┌─────────────────────────┐         ┌─────────────────────────┐         ┌─────────────────────────┐
│        Workflow         │         │         AIAgent         │         │      Subscription       │
│─────────────────────────│         │─────────────────────────│         │─────────────────────────│
│ id: UUID (PK)           │         │ id: UUID (PK)           │         │ id: UUID (PK)           │
│ organization_id: UUID   │         │ organization_id: UUID   │         │ organization_id: UUID   │
│ name: VARCHAR           │         │ name: VARCHAR           │         │ plan_tier: ENUM         │
│ is_active: BOOLEAN      │         │ model_provider: VARCHAR │         │ status: ENUM            │
│ trigger_config: JSONB   │         │ prompt_template: TEXT   │         │ razorpay_sub_id: VARCHAR│
│ steps_config: JSONB     │         │ temperature: FLOAT      │         │ current_period_end: DATE│
└─────────────────────────┘         └─────────────────────────┘         └─────────────────────────┘
             │1                                  │1
             │*                                  │*
┌─────────────────────────┐         ┌─────────────────────────┐
│    WorkflowExecution    │         │     AIAgentExecution    │
│─────────────────────────│         │─────────────────────────│
│ id: UUID (PK)           │         │ id: UUID (PK)           │
│ workflow_id: UUID       │         │ agent_id: UUID          │
│ organization_id: UUID   │         │ organization_id: UUID   │
│ status: ENUM (Success)  │         │ prompt_tokens: INTEGER  │
│ logs: JSONB             │         │ completion_tokens: INT  │
│ duration_ms: INTEGER    │         │ latency_ms: INTEGER     │
└─────────────────────────┘         └─────────────────────────┘
```

---

## 5. AI Service & RAG Architecture

### 5.1 Provider Abstraction Layer
All AI requests are routed through a typed gateway providing model routing, token counting, semantic caching, and error failover:

```text
Incoming Task ──► AI Service Gateway
                        │
      ┌─────────────────┼─────────────────┐
      ▼                 ▼                 ▼
Primary Provider   Fallback Tier     Local / Fast Tier
Anthropic Claude   OpenAI GPT-4o     Google Gemini 2.5 Flash
(Reasoning/Chat)   (Structured)      (High-Volume Extraction)
```

### 5.2 Retrieval-Augmented Generation (RAG) Pipeline
1. **Document Ingestion:** Customers upload files (PDF, DOCX, CSV, TXT) via signed S3 URLs.
2. **Text Extraction & Chunking:** Worker extracts text and chunks with recursive 512-token windows and 50-token overlap.
3. **Embedding Generation:** OpenAI `text-embedding-3-small` creates 1536-dimensional vector embeddings.
4. **Vector Storage & Search:** Stored in PostgreSQL with `pgvector` (`HNSW` index for sub-10ms cosine similarity retrieval filtered by `organization_id`).
5. **Context Augmentation:** Top-$K$ ($K=5$) relevant chunks injected into system prompt instructions.

---

## 6. Automation & Background Worker Engine

### 6.1 Architecture Overview
- **Message Broker:** Redis Cluster running BullMQ queues.
- **Worker Concurrency:** Dynamic worker pool with priority queues (`high`, `default`, `bulk`).
- **Execution Lifecycle:**
  $$\text{Trigger Received} \longrightarrow \text{Enqueue Job} \longrightarrow \text{Worker Pops Job} \longrightarrow \text{Execute Step} \longrightarrow \text{Log Output} \longrightarrow \text{State Saved}$$
- **Reliability:** Automated retries with exponential backoff ($2^n \times 1000\text{ms}$), dead-letter queue (DLQ) for failed executions, and error alerting.

---

## 7. Authentication, Authorization & Identity

### 7.1 Authentication Mechanisms
- **Credentials Auth:** Email + password verified with Argon2id ($m=65536, t=3, p=4$).
- **Session Management:** Cryptographically signed, `HttpOnly`, `Secure`, `SameSite=Lax` cookies with server-side session revocation in Redis.
- **Social OAuth2:** Google Workspace and Microsoft Azure AD OAuth2 integrations.
- **MFA:** RFC 6238 TOTP with encrypted backup codes.

### 7.2 Role-Based Access Control (RBAC) Matrix
| Capability / Permission | Owner | Admin | Manager | Member | Viewer |
|---|:---:|:---:|:---:|:---:|:---:|
| Organization Settings & Billing | ✅ | ✅ | ❌ | ❌ | ❌ |
| Invite & Manage Users | ✅ | ✅ | ❌ | ❌ | ❌ |
| Manage API Keys & Webhooks | ✅ | ✅ | ❌ | ❌ | ❌ |
| Create / Edit Workflows & Agents | ✅ | ✅ | ✅ | ❌ | ❌ |
| Run Workflows & Execute Agents | ✅ | ✅ | ✅ | ✅ | ❌ |
| View Dashboards & Execution Logs | ✅ | ✅ | ✅ | ✅ | ✅ |
| Export Data & Audit Logs | ✅ | ✅ | ❌ | ❌ | ❌ |

---

## 8. Billing, Subscriptions & Payments

### 8.1 Dual Gateway Architecture
- **Domestic (India):** Razorpay Subscriptions API for INR transactions, supporting UPI Autopay, e-NACH, and Credit/Debit cards.
- **International:** Stripe Billing for USD, EUR, GBP, AED transactions.

### 8.2 Webhook Verification & Lifecycle
```text
Customer Checkout ──► Payment Gateway (Razorpay/Stripe)
                             │
                             ▼
                 Signed Webhook POST Request
                             │
                             ▼
             API Gateway (`/v1/billing/webhooks`)
                             │
                             ├─► 1. Verify Cryptographic Signature (HMAC-SHA256)
                             ├─► 2. Check Idempotency Key (Redis / DB)
                             ├─► 3. Update Organization Subscription Status
                             ├─► 4. Provision Plan Limits / Token Quotas
                             └─► 5. Generate GST-Compliant Tax Invoice
```

---

## 9. API Surface & Endpoint Specifications

All endpoints are versioned under `/v1/` and return standardized JSON payloads:

```text
/v1/public/
  POST   /assessments              # Public intake submission & diagnostic generation
  GET    /plans                    # Public pricing and plan capabilities

/v1/auth/
  POST   /register                 # User registration
  POST   /login                    # Password authentication & session issuance
  POST   /logout                   # Session invalidation
  POST   /verify-email             # Email token verification
  POST   /reset-password           # Password reset flow

/v1/organizations/
  GET    /current                  # Get active workspace details
  PATCH  /current                  # Update workspace metadata
  GET    /members                  # List workspace members
  POST   /members/invite           # Send member invitation

/v1/agents/
  GET    /                         # List organization AI agents
  POST   /                         # Create new AI agent
  GET    /:id                      # Agent configuration & metrics
  PATCH  /:id                      # Update agent prompt/tools
  POST   /:id/test                 # Execute agent test prompt

/v1/workflows/
  GET    /                         # List workflows
  POST   /                         # Create workflow
  PATCH  /:id                      # Update workflow steps
  POST   /:id/trigger              # Manually trigger workflow

/v1/integrations/
  GET    /                         # List active and available connectors
  POST   /:provider/connect        # Initiate OAuth or save API keys
  DELETE /:id                      # Disconnect integration

/v1/billing/
  POST   /checkout                 # Create Razorpay / Stripe checkout session
  GET    /invoices                 # Download historical GST invoices
  POST   /webhooks                 # Gateway webhook ingress
```

---

## 10. Security, Privacy & Compliance (OWASP ASVS Level 2)

- **Transport Security:** Strict Transport Security (HSTS) with minimum 1-year preload, TLS 1.3 only.
- **Data Encryption:** 
  - Database volumes encrypted at rest with AES-256 (KMS-managed keys).
  - Third-party integration tokens encrypted using envelope encryption with dedicated master keys.
- **Input Validation & Sanitization:** Strict Zod schema validation across all request parameters and payloads.
- **Rate Limiting:** Sliding-window rate limiting via Redis (`express-rate-limit` / `@fastify/rate-limit`):
  - Public endpoints: 30 requests/min per IP.
  - Auth endpoints: 5 attempts/min per IP.
  - Authenticated API: 300 requests/min per user.
- **Privacy Compliance:** Built-in DPDP Act 2023 / GDPR compliance endpoints for data export (`GET /v1/account/export`) and erasure (`DELETE /v1/account/purge`).

---

## 11. Observability, Telemetry & Logging

- **Structured Logging:** Pino JSON logger outputting `trace_id`, `organization_id`, `user_id`, `timestamp`, `level`, and `latency_ms`.
- **Application Performance Monitoring (APM):** OpenTelemetry instrumentation tracing HTTP requests, DB queries, Redis queue latencies, and external AI calls.
- **Error Tracking:** Sentry SDK initialized on both frontend (client errors) and backend (unhandled exceptions, failed jobs).
- **Audit Logging:** Tamper-evident, immutable audit trail tracking sensitive events (user role changes, API key issuance, billing modifications, data exports).

---

## 12. Technical Risk Register & Debt Audit

1. **CSS Layering Specificity:** Multiple CSS files (`index.css`, `App.css`, `premium-restyle.css`) must be maintained cleanly to avoid specificity overrides.
2. **WebGL / Canvas Resource Cleanup:** Continuous Three.js animations in `Hero.jsx` and `Cinematic3DBackground.jsx` must cleanly dispose of geometries, materials, and RAF loops on unmount.
3. **Environment Variable Hygiene:** Client-side Vite environment variables must never include private provider keys (enforce `VITE_` prefix whitelist audit in CI).

---

## 13. TRD Version History & Changelog

- **v1.0 (18 Aug 2026):** Initial technical baseline documenting frontend marketing architecture.
- **v1.1 (18 Aug 2026):** Production SaaS blueprint (PostgreSQL schema, Fastify API, BullMQ workers, Razorpay).
- **v2.0 (29 Aug 2026 - CURRENT):** **Canonical Consolidated Single Source of Truth**. Merged architecture diagrams, multi-tenant RLS schema, RAG pipeline specs, RBAC matrix, dual-gateway billing specs, REST API surface, and OWASP Level 2 security standards into `/docs/technical/TRD.md`.
