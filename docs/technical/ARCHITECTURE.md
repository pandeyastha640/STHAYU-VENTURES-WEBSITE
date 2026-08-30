# STHAYU VENTURES
## System Architecture Specification

**Document Version:** 1.0  
**Date:** 29 August 2026  
**Status:** Approved Technical Architecture  
**Parent Document:** `/docs/technical/TRD.md`  

---

## 1. System Overview

Sthayu Ventures is architected as an event-driven, multi-tenant cloud platform composed of a high-performance marketing web app, an authenticated customer SaaS workspace, a centralized REST/WebSocket API layer, distributed background execution workers, and a provider-agnostic AI & RAG gateway.

---

## 2. High-Level Architecture Diagram

```text
                                 [ End Users / Public Visitors ]
                                                │
                                                ▼
                                    [ Cloudflare CDN & WAF ]
                                                │
                     ┌──────────────────────────┴──────────────────────────┐
                     │                                                     │
                     ▼ (Static SPA Assets)                                 ▼ (Dynamic App & API)
          ┌─────────────────────┐                               ┌─────────────────────┐
          │  Marketing Website  │                               │ Customer Workspace  │
          │   (Vite/React 19)   │                               │  (Next.js / Vite)   │
          └──────────┬──────────┘                               └──────────┬──────────┘
                     │                                                     │
                     └──────────────────────────┬──────────────────────────┘
                                                │ HTTPS / WSS
                                                ▼
                                    ┌───────────────────────┐
                                    │    API Gateway &      │
                                    │   Reverse Proxy       │
                                    │   (Fastify / Node)    │
                                    └───────────┬───────────┘
                                                │
         ┌───────────────────┬──────────────────┼───────────────────┬───────────────────┐
         ▼                   ▼                  ▼                   ▼                   ▼
  [ Auth Service ]   [ Workspace API ]   [ AI Service ]     [ Workflow Hub ]    [ Billing & Tax ]
  Argon2id + JWT     Multi-Tenant CRUD   Gateway + RAG      Trigger Ingress     Razorpay/Stripe
         │                   │                  │                   │                   │
         └───────────────────┼──────────────────┴───────────────────┼───────────────────┘
                             │                                      │
                             ▼                                      ▼
                  ┌─────────────────────┐                ┌─────────────────────┐
                  │    Redis Cluster    │◄───────────────┤   BullMQ Workers    │
                  │   (Session/Cache/   │                │   (Async Jobs &     │
                  │     Job Queues)     │                │   Integrations)     │
                  └──────────┬──────────┘                └──────────┬──────────┘
                             │                                      │
                             └──────────────────┬───────────────────┘
                                                │
                                                ▼
                                    ┌───────────────────────┐
                                    │ Managed PostgreSQL 16 │
                                    │  + pgvector Extension │
                                    │ (RLS Multi-Tenancy)   │
                                    └───────────────────────┘
```

---

## 3. Core Component Subsystems

### 3.1 Marketing Web Application (`apps/marketing`)
- **Technology:** React 19, Vite 8, Tailwind CSS 4, GSAP 3, Three.js.
- **Role:** High-conversion public front door, brand positioning, interactive problem discovery, digital assessment intake, and self-service registration funnel.
- **Hosting:** Cloudflare Pages / AWS S3 + CloudFront static edge delivery.

### 3.2 SaaS Customer Workspace (`apps/workspace`)
- **Technology:** Next.js App Router / React 19 SPA, Tailwind CSS, TanStack Query, Radix UI primitives, Lucide React.
- **Role:** Authenticated portal for tenant administrators and operators to configure AI agents, build workflows, connect CRM/WhatsApp integrations, inspect real-time execution logs, and manage subscription billing.

### 3.3 Core API Layer (`services/api`)
- **Technology:** Fastify / Express on Node.js 22 with TypeScript.
- **Responsibilities:**
  - JWT / Session cookie authentication & token refresh.
  - Multi-tenant tenant scoping & RBAC policy enforcement.
  - CRUD operations for workflows, agents, integrations, and leads.
  - Ingress webhook listeners (Razorpay, Stripe, WhatsApp Cloud API).
  - Streaming SSE / WebSocket endpoints for real-time agent output.

### 3.4 Asynchronous Worker Pool (`services/worker`)
- **Technology:** BullMQ on Redis 7+.
- **Responsibilities:**
  - Asynchronous execution of multi-step automation workflows.
  - Outbound third-party API dispatches (WhatsApp, Resend, CRM updates).
  - Document ingestion, chunking, and vector embedding generation.
  - Scheduled cron triggers and automated report compilation.

### 3.5 AI Gateway & Semantic RAG Engine (`services/ai`)
- **Technology:** TypeScript SDKs for Anthropic Claude, OpenAI, Google Gemini, and `pgvector`.
- **Responsibilities:**
  - Token quota metering and rate-limit guardrails per tenant.
  - Semantic vector similarity retrieval over uploaded customer documentation.
  - Structured schema validation on model responses.
  - Provider failover orchestration (Claude 3.5 Sonnet $\rightarrow$ GPT-4o $\rightarrow$ Gemini Flash).

---

## 4. Multi-Tenant Data Isolation Pattern

```text
[ Incoming Request with Org JWT ]
               │
               ▼
[ Auth & Context Middleware ] ──► Extracts `organization_id`
               │
               ▼
[ Database Query Context ] ──► Executes `SET LOCAL app.current_organization_id = '<id>'`
               │
               ▼
[ PostgreSQL Row-Level Security ] ──► Automatically appends `WHERE organization_id = current_setting('app.current_organization_id')`
```

Every database table holding customer data implements PostgreSQL Row-Level Security (RLS) policies, guaranteeing that data leaks across tenant boundaries are mathematically prevented at the database kernel level.
