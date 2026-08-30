# STHAYU VENTURES
## AI Architecture & RAG Pipeline Specification

**Document Version:** 1.0  
**Date:** 29 August 2026  
**Status:** Approved Technical Architecture  
**Parent Document:** `/docs/technical/TRD.md`  

---

## 1. Overview & Objectives

The Sthayu Ventures AI subsystem provides an enterprise-grade, provider-agnostic artificial intelligence layer. It powers autonomous AI agents (Sales, Support, WhatsApp, Calling), intelligent lead qualification, semantic search, and document-grounded Retrieval-Augmented Generation (RAG).

---

## 2. AI Gateway & Model Routing Architecture

```text
                                [ AI Request Payload ]
                                (Agent ID, Prompt, Context)
                                           │
                                           ▼
                            ┌──────────────────────────────┐
                            │      AI Gateway Service      │
                            └──────────────┬───────────────┘
                                           │
         ┌─────────────────────────────────┼─────────────────────────────────┐
         ▼                                 ▼                                 ▼
┌──────────────────┐             ┌──────────────────┐             ┌──────────────────┐
│  Quota & Limits  │             │  Semantic Cache  │             │ Guardrails & PII │
│ Check Org Quota  │             │  Redis Embedding │             │ Redaction Regex  │
└────────┬─────────┘             └────────┬─────────┘             └────────┬─────────┘
         │                                │                                │
         └────────────────────────────────┼────────────────────────────────┘
                                          │
                                          ▼
                            ┌──────────────────────────────┐
                            │    Dynamic Model Router      │
                            └──────────────┬───────────────┘
                                           │
         ┌─────────────────────────────────┼─────────────────────────────────┐
         ▼ (Complex Reasoning / Chat)      ▼ (Structured Extraction)         ▼ (High-Volume / Fast Tier)
┌──────────────────┐             ┌──────────────────┐             ┌──────────────────┐
│ Anthropic Claude │             │   OpenAI GPT-4o  │             │   Google Gemini  │
│  3.5 Sonnet      │             │ Structured JSON  │             │  2.5 Flash       │
└────────┬─────────┘             └────────┬─────────┘             └────────┬─────────┘
         │                                │                                │
         └────────────────────────────────┼────────────────────────────────┘
                                          │
                                          ▼
                            ┌──────────────────────────────┐
                            │  Response Validator & Meter  │
                            │  Log Tokens, Latency & Cost  │
                            └──────────────────────────────┘
```

---

## 3. Retrieval-Augmented Generation (RAG) Architecture

### 3.1 Document Ingestion Flow
1. **Upload:** User uploads knowledge documents (PDF, DOCX, CSV, TXT) via pre-signed S3 URLs.
2. **Text Parsing & Sanitization:** Text is extracted, cleaned, and stripped of malicious formatting.
3. **Chunking Strategy:** Recursive character splitting using 512-token chunks with 50-token overlap to maintain contextual continuity.
4. **Vector Embedding:** Embeddings generated via OpenAI `text-embedding-3-small` (1,536 dimensions).
5. **Vector Indexing:** Stored in PostgreSQL with `pgvector` and an `HNSW` (Hierarchical Navigable Small World) index for sub-10ms similarity queries.

### 3.2 Query & Context Augmentation Flow
```text
[ User Inquiry ] ──► [ Generate 1536d Query Embedding ]
                            │
                            ▼
     [ Cosine Similarity Query in PostgreSQL ]
     `WHERE organization_id = :orgId ORDER BY embedding <=> :queryVector LIMIT 5`
                            │
                            ▼
     [ Top-5 Relevant Document Excerpts Retrieved ]
                            │
                            ▼
     [ System Prompt Augmented with Context Chunks ]
                            │
                            ▼
     [ Execution by LLM with Strict Hallucination Boundary ]
```

---

## 4. Agent State Machine & Execution Protocol

Every AI agent operates as an auditable state machine with deterministic guardrails:

```text
[ Trigger: Webhook / Message / Inbound Chat ]
                   │
                   ▼
         [ 1. Ingest & Validate ]
                   │
                   ▼
         [ 2. Retrieve Context (RAG) ]
                   │
                   ▼
         [ 3. Construct System Prompt ]
                   │
                   ▼
         [ 4. Model Inference & Tool Choice ]
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
   [ Direct Response ]  [ Tool Call Required ]
         │                   │
         │                   ▼
         │             [ Execute Tool (e.g. CRM API / Calendar) ]
         │                   │
         │                   ▼
         │             [ Feed Tool Result Back to LLM ]
         │                   │
         └─────────┬─────────┘
                   │
                   ▼
         [ 5. Post-Inference Guardrail Check ]
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
  [ Pass Safety ]      [ Fallback / Flag ]
         │                   │
         ▼                   ▼
[ 6. Deliver Output ]  [ Escalate to Human ]
         │
         ▼
[ 7. Log Telemetry (Tokens, Cost, Latency) ]
```

---

## 5. Token Quota Metering & Cost Controls

- **Hard Quota Enforcement:** When a tenant reaches 100% of their monthly token allocation, the gateway transitions agents to a graceful fallback message or executes an automated card charge if overage billing is enabled.
- **Cost Attribution:** Every agent run logs `input_tokens`, `output_tokens`, and calculated compute cost in USD/INR directly to `AIAgentExecution` records for real-time customer transparency.
