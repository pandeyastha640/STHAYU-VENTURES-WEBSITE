# STHAYU VENTURES
## Integrations & Connector Architecture

**Document Version:** 1.0  
**Date:** 29 August 2026  
**Status:** Approved Technical Architecture  
**Parent Document:** `/docs/technical/TRD.md`  

---

## 1. Integration Adapter Framework

All third-party services connect to Sthayu Ventures through a standardized TypeScript Adapter interface. This ensures that vendor-specific API implementations remain encapsulated and never pollute the core workflow engine.

```typescript
export interface IntegrationAdapter<TConfig, TCredentials> {
  id: string;
  name: string;
  category: 'crm' | 'communication' | 'payment' | 'calendar' | 'storage';
  authType: 'oauth2' | 'api_key' | 'webhook';
  
  validateCredentials(credentials: TCredentials): Promise<boolean>;
  refreshToken?(credentials: TCredentials): Promise<TCredentials>;
  
  executeAction(
    actionId: string,
    params: Record<string, unknown>,
    context: ExecutionContext
  ): Promise<ActionResult>;
}
```

---

## 2. Priority Connectors & Implementation Protocols

### 2.1 WhatsApp Cloud API (Meta Official BSP)
- **Use Cases:** Instant lead engagement, interactive button menus, appointment reminders, and automated support escalation.
- **Authentication:** Permanent System User Token + Webhook Verification Token.
- **Ingress Webhook:** `/v1/webhooks/in/whatsapp` (signature verified with `X-Hub-Signature-256`).
- **Media Support:** Template messages, interactive list pickers, and inbound PDF/image document parsing.

### 2.2 CRM Connectors (HubSpot & Zoho CRM)
- **Use Cases:** Real-time lead ingestion, contact enrichment, deal stage progression, and activity logging.
- **Authentication:** OAuth2 with automated refresh token rotation via background jobs.
- **Sync Model:** Bi-directional sync with conflict resolution prioritizing the most recent timestamp.

### 2.3 Email Infrastructure (Resend / SendGrid / SMTP)
- **Use Cases:** Transactional lead alerts, customer onboarding sequences, weekly analytical digests, and password reset tokens.
- **Authentication:** API Key (KMS-encrypted).
- **Features:** DKIM/SPF verification, bounce webhook processing, and unsubscribe link injection.

### 2.4 Payment Gateways (Razorpay & Stripe)
- **Use Cases:** Subscription checkout, recurring billing, usage-based invoicing, and automated dunning.
- **Authentication:** Key ID + Key Secret (KMS-encrypted).
- **Webhook Processing:** Signature-verified endpoints (`/v1/billing/webhooks`) with Redis idempotency deduplication.

### 2.5 Calendar & Scheduling (Google Calendar & Cal.com)
- **Use Cases:** Automated discovery call booking, customer consultation scheduling, and conflict-free availability checking.
- **Authentication:** Google OAuth2 with calendar read/write scopes.

---

## 3. Credential Security & KMS Envelope Encryption

Third-party credentials and OAuth refresh tokens are never stored as plaintext in the database.

```text
[ Raw Integration Credential ]
               │
               ▼
[ 1. Generate Ephemeral Data Key (DEK) ]
               │
               ▼
[ 2. Encrypt Credential with DEK (AES-256-GCM) ]
               │
               ▼
[ 3. Encrypt DEK with AWS KMS / Cloud KMS Master Key ]
               │
               ▼
[ 4. Store Encrypted Credential + Encrypted DEK in Database ]
```

When a worker executes an integration action:
1. It requests KMS to decrypt the DEK.
2. It decrypts the credential in memory for the duration of the API call.
3. The plaintext credential is immediately garbage-collected and never logged.
