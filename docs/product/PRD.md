# STHAYU VENTURES
## Product Requirements Document (PRD)

**Document Version:** 2.0 (Consolidated Single Source of Truth)  
**Date:** 29 August 2026  
**Status:** Canonical Product Definition & Production-SaaS Blueprint  
**Repository:** `pandeyastha640/STHAYU-VENTURES-WEBSITE`  
**Supersedes:** `Sthayu_Ventures_PRD_v1.0.md`, `Sthayu_Ventures_PRD_v1.1.md`  

---

## 1. Executive Summary & Purpose

This Product Requirements Document (PRD) serves as the definitive **Single Source of Truth** for Sthayu Ventures. It consolidates the baseline marketing capabilities with the realistic, production-grade SaaS architecture required to transform Sthayu Ventures into an intelligent business technology operating system.

### Core Strategic Mandate
> **Sthayu Ventures = AI + Workflow Automation + Connected Business Systems + Scalable SaaS**

Sthayu Ventures operates on a dual commercial model:
1. **Customized Digital Systems & Solutions (Done-For-You / High-Touch):** Tailored AI agents, automated workflow pipelines, CRM integrations, and digital infrastructure for SMBs, growing startups, and enterprises.
2. **Standardized & Reusable SaaS Platform (Self-Service / Subscription):** A multi-tenant, cloud-hosted workspace where businesses configure, execute, monitor, and pay for AI agents, automated triggers, integrations, and operational analytics.

---

## 2. Current Product Baseline & Honest Inventory

The current codebase is an interactive React 19 + Vite 8 single-page application representing the **V1 Marketing Experience and Public Conversion Surface**.

### 2.1 Existing Component Hierarchy
1. **Navbar** (`src/components/Navbar.jsx`) — Brand anchor, navigational routing to sections, CTA button.
2. **Hero** (`src/components/Hero.jsx`) — Primary value proposition, CTAs, interactive metrics, Three.js neural visual orb.
3. **Media Showcase** (`src/components/MediaShowcase.jsx`) — Cinematic AI/automation video and interactive narrative.
4. **Problem Discovery** (`src/components/ProblemDiscovery.jsx`) — Interactive discovery of recurring business bottlenecks and solution mapping.
5. **Why Sthayu** (`src/components/WhySthayu.jsx`) — Differentiation pillars, transformation comparison.
6. **Services** (`src/components/Services.jsx`) — 6 canonical core offerings.
7. **AI Agents** (`src/components/AIAgents.jsx`) — AI workforce catalog (Sales, Support, Calling, WhatsApp, Operations, Knowledge).
8. **System Stack / Industry Solutions** (`src/components/SystemStack.jsx`) — Vertical architecture stacks for 6 industries.
9. **How It Works** (`src/components/HowItWorks.jsx`) — 5-stage delivery lifecycle (Discover → Design → Automate → Integrate → Optimize).
10. **Sthayu Intelligence / Showcase** (`src/components/Showcase.jsx`) — Conceptual Command Center dashboard interface.
11. **Case Studies** (`src/components/CaseStudies.jsx`) — Illustrative business outcomes and transformation metrics.
12. **Interactive Showcase & Visualizations** (`src/components/InteractiveShowcase.jsx`, `InteractiveDataViz.jsx`, `Animated3DBox.jsx`) — 3D and canvas-based visual systems.
13. **Visual Portfolio Gallery** (`src/components/PremiumPortfolioGallery.jsx`) — Visual solution showcase across verticals.
14. **Pricing** (`src/components/Pricing.jsx`) — Starter (₹9,999/mo), Growth (₹24,999/mo), Scale (₹49,999/mo), Enterprise (Custom).
15. **Digital Assessment** (`src/components/AssessmentSection.jsx`) — Intake form capturing business type, challenges, tools, team size, and goals.
16. **Final CTA** (`src/components/FinalCTA.jsx`) — Discovery call conversion trigger.
17. **Footer** (`src/components/Footer.jsx`) — Brand links, legal anchors, contact details.

### 2.2 Functional Reality & Scope Boundary
- **Marketing Surface:** Production-ready visual presentation with GSAP, Three.js, and Tailwind CSS.
- **Assessment Engine:** Frontend form rendered; backend persistence, scoring, and automated email/CRM dispatch are defined for Phase 1 MVP.
- **Pricing & Checkout:** Display-level tiers rendered; Razorpay/Stripe subscription billing integration defined for Phase 1/4.
- **Case Study Metrics:** Clearly designated as illustrative performance models until validated with real client telemetry.

---

## 3. Product Vision & Operating Philosophy

### 3.1 The Value Arc
The platform guides prospective and active clients through an unbroken value continuum:
$$\text{Problem} \longrightarrow \text{Diagnosis} \longrightarrow \text{Solution} \longrightarrow \text{Proof} \longrightarrow \text{Pricing} \longrightarrow \text{Assessment} \longrightarrow \text{Implementation} \longrightarrow \text{SaaS Compounding}$$

### 3.2 Core Differentiator
The core differentiator is **not generic AI**. The differentiator is **AI connected directly to execution, workflows, business systems, and measurable ROI**.

Every capability must deliver one or more measurable business outcomes:
- **Time Saved:** Hours of repetitive manual work eliminated.
- **Cost Reduced:** Lower operational overhead and decreased error remediation expenses.
- **Revenue Increased:** Faster lead qualification, accelerated sales cycles, and reduced lead decay.
- **Speed Improved:** Instantaneous customer service and automated operational routing.
- **Visibility Improved:** Real-time metrics, auditable logs, and unified operational reporting.
- **Scalability Compounded:** Handling $10\times$ transaction volumes without linear headcount growth.

---

## 4. Business Objectives & Growth Targets

*(Aligned with Sthayu Ventures Master Business Plan v2)*

1. **Revenue Target:** Build a high-margin business achieving ₹10 Crores ARR within 5 years.
2. **Customer Milestones:**
   - **Year 1:** 100 paying SaaS customers + ₹1.5 Cr combined revenue (SaaS + Solutions).
   - **Year 3:** 1,000 paying SaaS customers + 5,000 free-tier/trial users.
   - **Year 5:** Multi-million ARR with international operations (UAE, UK, US).
3. **Operational Model:** High-leverage, AI-augmented engineering and delivery organization maintaining gross margins $>75\%$.

---

## 5. Target Audience & Customer Segmentation

### 5.1 Primary Market Segments
1. **Small & Medium Businesses (SMBs):** Require end-to-end automation and turn-key AI agents without maintaining an in-house engineering team.
2. **Growing Startups:** Need scalable CRM, customer onboarding, and analytics automation to keep teams lean.
3. **Service & Agency Businesses:** Require streamlined client reporting, scheduling, support triage, and invoice workflows.
4. **Operations-Heavy Companies (Logistics, Healthcare, Manufacturing):** Need cross-tool synchronization, webhook processing, inventory/dispatch tracking, and human-in-the-loop approvals.
5. **Mid-Market & Enterprise:** Require private tenant deployments, strict RBAC, SSO/SAML, custom AI fine-tuning/RAG over proprietary data, and custom SLAs.

### 5.2 Multi-Tenant User Personas
| Persona | Key Needs | Pain Points | Primary Product Surface |
|---|---|---|---|
| **Founder / CEO** | Revenue growth, cost reduction, rapid ROI | High payroll overhead, dropped leads, lack of unified oversight | Executive Analytics, Billing, High-level KPI Dashboards |
| **Head of Operations** | Workflow visibility, zero manual data re-entry, SLA compliance | Disconnected tools, manual spreadsheet reporting, operational handoff delays | Workflow Builder, Integration Hub, Audit Logs, Execution Monitors |
| **Sales / Marketing Director** | Fast lead response ($<60\text{s}$), automated qualification, CRM sync | Lead decay, repetitive follow-ups, poor CRM hygiene | AI Sales Agent, Assessment Lead Inbox, CRM Automations |
| **Support / Success Lead** | $24/7$ instant resolution, intelligent ticket routing, escalation | High ticket volume, repetitive tier-1 FAQs, slow agent response | AI Support Agent, WhatsApp / Omni-Channel Hub |
| **CTO / Technical Architect** | Secure APIs, webhook reliability, data privacy, RLS isolation | Vendor lock-in, unencrypted credentials, lack of audit trails | API Keys, Webhook Engine, Knowledge Base RAG, Security Settings |
| **Internal Sthayu Admin** | Tenant provisioning, telemetry, billing audits, dunning management | Manual tenant overrides, lack of customer health visibility | Super Admin Console, Usage Metering, System Health Monitor |

---

## 6. Industry Solution Verticals

The canonical industry solution stacks supported across marketing and product templates:
1. **Professional Services:** Automated client intake, proposal generation, calendar booking, time tracking, invoice generation.
2. **D2C & E-Commerce:** Abandoned cart re-engagement, WhatsApp order tracking, automated customer support, inventory alerts.
3. **Education & Coaching:** Lead scoring, student onboarding sequences, automated reminders, AI knowledge tutoring.
4. **Real Estate:** Instant property inquiry response, buyer qualification, site visit scheduling, automated WhatsApp follow-ups.
5. **Healthcare Operations:** Patient appointment scheduling, intake form digitalization, reminder sequences, insurance document processing.
6. **Manufacturing & Logistics:** Dispatch tracking, vendor webhook synchronization, purchase order parsing, inventory threshold alerts.

---

## 7. The Eight Canonical Product Pillars

### Pillar 1: AI Agents
Autonomous, task-specific intelligent agents equipped with:
- Configurable System Persona & Operating Policies.
- Retrieval-Augmented Generation (RAG) over customer-specific knowledge bases (PDFs, URLs, DOCX).
- Multi-channel ingestion (Web Chat, WhatsApp, Email, Voice/Telephony in Phase 3).
- Structured tool execution (API calls, CRM queries, calendar booking).
- Deterministic guardrails, PII redaction, and human-in-the-loop escalation.

### Pillar 2: Workflow Automation Engine
Deterministic, distributed workflow execution:
- **Trigger $\longrightarrow$ Condition $\longrightarrow$ Action $\longrightarrow$ Result** execution pipeline.
- Visual workflow canvas with branching, filtering, loops, and parallel paths.
- Asynchronous job queue execution with exponential retry backoff.
- Human approval checkpoints (pause workflow until approved via email/dashboard).

### Pillar 3: AI Operations & Decision Intelligence
- Autonomous summarization of incoming customer inquiries and operational logs.
- Next-Best-Action recommendations for sales and support personnel.
- Automated anomaly detection and priority escalation.
- Automated weekly operational digest generation.

### Pillar 4: Data & Analytics
- Multi-tenant operational dashboards displaying execution success rates, run times, and token utilization.
- Workflow ROI calculator (hours saved, monetary value generated).
- Custom report builder with scheduled email/Slack exports.

### Pillar 5: CRM Automation & Lead Lifecycle
- Ingestion from web forms, WhatsApp, incoming emails, and third-party webhooks.
- AI-driven lead scoring and qualification based on budget, authority, need, and timeline (BANT).
- Automated follow-up sequencing across channels.
- Real-time bi-directional synchronization with internal CRM and external platforms (HubSpot, Zoho).

### Pillar 6: Connected Business Systems (Integration Hub)
- Standardized integration adapter framework.
- Secure, KMS-encrypted credential storage.
- Support for OAuth2 flows, API keys, and webhook listeners.
- Pre-built connectors: WhatsApp Cloud API, SendGrid/Resend, Google Workspace, Razorpay, Stripe, HubSpot, Zoho, PostgreSQL.

### Pillar 7: Multi-Tenant Billing & Subscription Management
- Tiered subscriptions (Starter, Growth, Scale, Enterprise) with monthly and annual billing cycles.
- Usage-based metered billing for AI tokens, workflow runs, and active integration connectors.
- Automated tax compliance (GST in India, VAT/sales tax internationally).
- Webhook-verified payment lifecycles, automated invoicing, and intelligent dunning workflows.

### Pillar 8: Admin Console & Governance
- Tenant isolation and role-based access control (RBAC).
- Comprehensive immutable audit logs for compliance (DPDP, GDPR).
- Internal administration tools for subscription overrides, customer health scoring, and feature flagging.

---

## 8. Customer Journey & Conversion Architecture

```text
Visitor (Marketing Surface)
   │
   ├─► Explores Services, AI Agents & Industry Stacks
   ├─► Completes Digital Assessment Engine
   │      │
   │      └─► Automated Qualification & Diagnostic Output
   │             │
   │             ├─► Books Discovery Call (High-Touch Solution Track)
   │             │      └─► Custom Proposal ──► Implementation ──► SLA Retainer
   │             │
   │             └─► Self-Service Sign-up (SaaS Track)
   │                    │
   │                    ├─► 14-Day Growth Trial (No Credit Card Required)
   │                    ├─► Onboarding Wizard (Connect CRM / WhatsApp)
   │                    ├─► First Agent / Workflow Activated (<10 mins)
   │                    ├─► First Value Milestone Achieved
   │                    └─► Conversion to Paid Tier (Razorpay / Stripe)
   │                           │
   │                           └─► Expansion (Usage Metering & Upgrades)
```

---

## 9. Pricing & Packaging Architecture

| Plan | Display Price | Target Segment | Workflows | AI Token / Execution Quota | Integrations | Support Tier |
|---|---|---|---|---|---|---|
| **Starter** | ₹9,999 / mo | SMBs starting with automation | Up to 5 Active | 50,000 tokens / 300 AI actions | 2 Active | Standard Email (24h SLA) |
| **Growth** | ₹24,999 / mo | Growing businesses scaling ops | Up to 20 Active | 250,000 tokens / 1,500 AI actions | 5 Active | Priority Email + Chat (8h SLA) |
| **Scale** | ₹49,999 / mo | Automation-first organizations | Unlimited | 1,000,000 tokens / 6,000 AI actions | Unlimited | Dedicated Account Mgr (2h SLA) |
| **Enterprise** | Custom (from ₹1.5L/mo) | Mid-market & Enterprise | Custom | Custom Quotas / Dedicated Models | Custom Adapters | 24/7 Dedicated Team + Custom SLA |

*Annual Billing:* 15% discount on all annual subscription commitments.

---

## 10. Functional Requirements (FRs)

### 10.1 Marketing & Public Experience
- **FR-M01:** Responsive, high-performance rendering across all desktop, tablet, and mobile viewport widths.
- **FR-M02:** Interactive Assessment form collects structured diagnostic data and submits securely to `/v1/assessments`.
- **FR-M03:** Immediate diagnostic feedback summary rendered to user upon assessment completion.
- **FR-M04:** Discovery call booking integration with calendar synchronization (Google Meet / Cal.com).
- **FR-M05:** Clear disclaimers delineating illustrative case study benchmarks from verified customer production telemetry.

### 10.2 Authentication & User Management
- **FR-A01:** User registration via email/password (Argon2id hashing) with mandatory email verification.
- **FR-A02:** OAuth2 authentication (Google, Microsoft Workspace).
- **FR-A03:** Multi-tenant organization workspace creation upon user onboarding.
- **FR-A04:** Role-Based Access Control (RBAC) with 5 roles: `Owner`, `Admin`, `Manager`, `Member`, `Viewer`.
- **FR-A05:** Multi-Factor Authentication (TOTP MFA) for privileged organizational roles.

### 10.3 Workspace & Automation Operations
- **FR-W01:** Isolated tenant workspace dashboard rendering real-time KPI metrics, active workflows, and agent statuses.
- **FR-W02:** Visual workflow configuration interface supporting conditional logic, scheduled cron triggers, and webhooks.
- **FR-W03:** AI Agent management console for prompt template editing, knowledge base file uploads, and execution testing.
- **FR-W04:** Execution log inspector providing step-by-step latency, input/output data, token cost, and error traces.
- **FR-W05:** Human-in-the-loop review queue for workflows requiring manual approval before sensitive actions.

### 10.4 Integrations & Connectors
- **FR-I01:** Connector marketplace allowing one-click OAuth2 and API key authentication.
- **FR-I02:** Encryption of all stored third-party tokens and API secrets using KMS-wrapped envelope encryption.
- **FR-I03:** Automated token refresh and connection health monitoring with alert dispatch upon credential expiration.

### 10.5 Billing & Subscription
- **FR-B01:** Seamless checkout session creation via Razorpay (INR) and Stripe (Multi-Currency).
- **FR-B02:** Cryptographically verified webhook handling for subscription creation, renewal, upgrade, downgrade, and cancellation.
- **FR-B03:** Automated GST-compliant PDF invoice generation and download in customer settings.
- **FR-B04:** Automated usage quota tracking with soft warnings at 80% and hard capping at 100% (with overage add-on option).

---

## 11. Non-Functional Requirements (NFRs)

- **NFR-01 (Performance):** Marketing site Largest Contentful Paint (LCP) $<2.5\text{s}$, Cumulative Layout Shift (CLS) $<0.1$, and First Input Delay (FID) $<100\text{ms}$ on 4G connections.
- **NFR-02 (Security):** Strict adherence to OWASP Top 10 guidelines; TLS 1.3 in transit; AES-256 at rest; strict CSP headers; parameterized SQL queries.
- **NFR-03 (Data Privacy):** Compliance with India's Digital Personal Data Protection (DPDP) Act 2023 and GDPR; automated data export and account erasure pipelines.
- **NFR-04 (Reliability & Availability):** Core API and Workflow Execution engine designed for $\ge 99.9\%$ uptime.
- **NFR-05 (Accessibility):** WCAG 2.1 Level AA compliance across all public and authenticated web surfaces.
- **NFR-06 (Multi-Tenant Isolation):** Logical data isolation enforced at the database level with tenant-scoped query filters and Row-Level Security (RLS).

---

## 12. Locked Strategic Decisions & Risk Register

### 12.1 Locked Strategic Decisions
1. **Primary Payment Engine:** Razorpay for domestic INR subscriptions; Stripe for international USD/GBP/EUR billing.
2. **CRM Architecture:** First-party internal CRM module for core lead capture, with two-way sync adapters for HubSpot and Zoho.
3. **AI Model Strategy:** Provider-agnostic abstraction layer with Anthropic Claude (Claude 3.5 Sonnet) as primary reasoning model, OpenAI (`text-embedding-3-small`) for vector embeddings, and Gemini as fast-tier fallback.
4. **Assessment Pipeline:** Rule-based instant scoring engine in Phase 1; AI-augmented deep diagnostic engine in Phase 2.
5. **Trial Model:** 14-day full Growth tier trial without requiring upfront credit card entry.

### 12.2 Risk Register & Mitigations
- **Risk 1: AI Provider Cost Volatility & Rate Limits.**  
  *Mitigation:* Strict token quota metering per tenant, semantic caching of frequent queries, and automated provider failover.
- **Risk 2: Multi-Tenant Data Leakage.**  
  *Mitigation:* Enforce `organization_id` column indexing, database RLS policies, automated integration tests verifying cross-tenant access denial.
- **Risk 3: Third-Party API Policy Changes (e.g. WhatsApp / Meta).**  
  *Mitigation:* Utilize official WhatsApp Cloud API BSPs; abstract communication channels so clients can fall back to email or SMS seamlessly.

---

## 13. PRD Version History & Changelog

- **v1.0 (18 Aug 2026):** Initial baseline PRD documenting the public marketing experience.
- **v1.1 (18 Aug 2026):** Production SaaS blueprint addition (RBAC, subscription tiers, security, modules).
- **v2.0 (29 Aug 2026 - CURRENT):** **Canonical Consolidated Single Source of Truth**. Merged marketing inventory, multi-tenant personas, 8 pillars, detailed functional & non-functional requirements, enterprise risk register, and locked strategic decisions into `/docs/product/PRD.md`.
