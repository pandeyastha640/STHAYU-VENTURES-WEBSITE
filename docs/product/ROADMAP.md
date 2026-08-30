# STHAYU VENTURES
## Product Roadmap (Phase 0 to Phase 9)

**Document Version:** 1.0  
**Date:** 29 August 2026  
**Status:** Approved Reference  
**Parent Document:** `/docs/product/PRD.md`  

---

## 1. Roadmap Overview & Timeline

The Sthayu Ventures roadmap outlines the phased progression from the current marketing baseline to a full-scale, multi-tenant enterprise AI + Automation operating system.

```text
[Phase 0: Baseline & PRD/TRD Alignment] (Complete)
      │
      ▼
[Phase 1: MVP Foundation] (Weeks 1–8)
  ├── Monorepo Skeleton & API Service
  ├── Persistent Assessment Engine & Lead Inbox
  ├── Multi-Tenant Auth (Argon2id, Session/JWT)
  ├── AI Sales / Support Agent Primitive
  └── Razorpay Sandbox Checkout & Invoices
      │
      ▼
[Phase 2: Core SaaS & Multi-Tenant Expansion] (Weeks 9–16)
  ├── Customer Workspace Dashboard (app.sthayuventures.com)
  ├── Visual Workflow Canvas & Queue Workers (BullMQ)
  ├── Multi-Tenant RAG Knowledge Base (pgvector)
  └── Integrations: WhatsApp Cloud API, HubSpot, Zoho, Resend
      │
      ▼
[Phase 3: AI + Voice & Omnichannel Telephony] (Weeks 17–24)
  ├── AI Calling Agent (Twilio / Plivo STT + TTS)
  ├── Autonomous Decision Support & Next-Best-Action
  └── Human-in-the-Loop Workflow Approval Engine
      │
      ▼
[Phase 4: Global Payments & Subscriptions] (Weeks 25–30)
  ├── Stripe Multi-Currency (USD, GBP, AED, EUR)
  ├── Prorated Upgrades, Downgrades, & Smart Dunning
  └── Automated Enterprise Contract & Custom Billing
      │
      ▼
[Phase 5: Cloud Infrastructure & Resilience] (Weeks 31–36)
  ├── Managed PostgreSQL Multi-AZ & Redis Cluster
  ├── Centralized Observability (OpenTelemetry + Datadog/Loki)
  └── Automated Backup, PITR, & Disaster Recovery
      │
      ▼
[Phase 6: Security Hardening & Compliance] (Weeks 37–42)
  ├── OWASP ASVS Level 2 Security Audit
  ├── DPDP Act 2023 & GDPR Privacy Compliance Tooling
  └── SOC 2 Type 1 / ISO 27001 Readiness
      │
      ▼
[Phase 7: Controlled Beta Launch] (Weeks 43–46)
  ├── 25-Customer Guided Onboarding Beta
  ├── Telemetry Validation & Pricing Tuning
  └── Public Help Center & Documentation
      │
      ▼
[Phase 8: General Public SaaS Launch] (Weeks 47–50)
  ├── Self-Service Sign-up & 14-Day Free Trial
  ├── Public Status Page & Changelog
  └── Global Marketing Funnel Activation
      │
      ▼
[Phase 9: Scale & Ecosystem Expansion] (Year 2+)
  ├── Connector Marketplace & Third-Party App Store
  ├── Public Developer Platform & SDKs (TypeScript / Python)
  └── Vertical Turn-Key SaaS Modules (D2C, Logistics, Real Estate)
```

---

## 2. Detailed Phase Specifications

### Phase 0: Baseline & Strategy Alignment (Status: COMPLETE)
- **Objective:** Establish canonical documentation, eliminate competing PRD/TRD fragments, audit codebase, and lock architecture ADRs.
- **Key Deliverables:** Single source of truth `/docs/product/PRD.md`, `/docs/technical/TRD.md`, architecture diagrams, audit reports, and capability matrix.

### Phase 1: MVP Foundation (Target: 8 Weeks)
- **Objective:** Bridge the public marketing site with working backend persistence, lead qualification, user auth, and payment checkout.
- **Deliverables:**
  1. Backend API service (`/services/api` in Fastify/Express + TypeScript).
  2. PostgreSQL database schema with Prisma/Drizzle ORM and multi-tenant `organization_id` models.
  3. Assessment submission endpoint (`POST /v1/assessments`) with rule-based diagnostic calculator.
  4. Internal lead inbox with email notification triggers.
  5. Authentication service (sign-up, email verification, password reset, session management).
  6. End-to-end AI Sales Agent test harness.
  7. Razorpay sandbox subscription checkout.
- **Success Criteria:** A visitor can complete the assessment, receive diagnostic feedback, register an account, and checkout via Razorpay sandbox.

### Phase 2: Core SaaS Platform (Target: 8 Weeks)
- **Objective:** Deliver the authenticated customer workspace and core workflow automation engine.
- **Deliverables:**
  1. Customer Workspace frontend (`app.sthayuventures.com`).
  2. Asynchronous job execution system with BullMQ and Redis.
  3. Visual drag-and-drop workflow canvas (triggers, branching, actions).
  4. Multi-tenant document ingestion & RAG engine using pgvector.
  5. WhatsApp Cloud API, Resend email, and CRM (HubSpot/Zoho) integration adapters.
  6. Usage metering engine for AI tokens and execution quotas.
- **Success Criteria:** 10 test organizations can configure independent workflows and run AI agents against uploaded PDF knowledge bases.

### Phase 3: AI Intelligence & Voice (Target: 8 Weeks)
- **Objective:** Expand into real-time voice telephony and autonomous decision support.
- **Deliverables:**
  1. AI Inbound/Outbound Calling Agent integrated with telephony providers.
  2. Real-time streaming audio pipeline (Deepgram/Whisper STT + ElevenLabs/Cartesia TTS).
  3. Autonomous Next-Best-Action recommendation engine for CRM leads.
  4. Human-in-the-loop email/in-app approval checkpoints for sensitive workflows.

### Phase 4: Global Billing & Enterprise Subscriptions (Target: 6 Weeks)
- **Objective:** Enable global multi-currency self-service and enterprise contract management.
- **Deliverables:**
  1. Dual-gateway billing orchestration (Razorpay for INR, Stripe for USD/GBP/EUR).
  2. Automated prorated plan transitions and intelligent dunning recovery sequences.
  3. GST and international sales tax handling.
  4. Custom enterprise contract generator and usage invoicing.

### Phase 5 to Phase 9: Production Scale, Compliance, & Launch
- Production infrastructure clustering, SOC 2/DPDP compliance audits, 25-tenant closed beta, full general public launch, and ecosystem marketplace.
