# Carters Care Platform Pricing Strategy

**Market:** Australian NDIS and aged care providers  
**Currency:** AUD, excluding GST  
**Positioning:** An operations platform for care providers that brings rostering, compliance, client records, case notes, incidents, timesheets, onboarding, reporting and AI assistance into one workspace.

## Executive recommendation

Use a **base subscription plus active-staff pricing** model. This is easier for providers to budget than pure per-seat pricing, scales with the operational value created, and avoids penalising organisations with many clients but a smaller workforce.

The recommended launch price is:

> **$299/month base + $12 per active staff member/month**

Include unlimited clients, administrators and read-only client portal users. Cap the standard plan at 50 active staff, then move larger providers to the Growth or Enterprise tiers below.

This places the platform above lightweight rostering tools while remaining materially below the cost of assembling separate rostering, compliance, CRM, incident and timesheet products.

## Recommended plans

| Plan | Best for | Included active staff | Monthly price | Annual price* |
|---|---|---:|---:|---:|
| **Starter** | Small providers and new businesses | Up to 10 | **$199** | **$2,030** |
| **Professional** | Established single-site providers | Up to 25 | **$399** | **$4,070** |
| **Growth** | Multi-team or multi-site providers | Up to 75 | **$899** | **$9,170** |
| **Enterprise** | Larger providers and complex operations | 76+ | **From $1,499** | **From $15,290** |

\*Annual pricing represents two months free, paid upfront. Prices exclude GST.

### Starter

- Dashboard and operational overview
- Client records and client portal
- Staff directory and onboarding
- Basic roster and shift management
- Timesheets and check-ins
- Case notes and incident recording
- Compliance tracking
- Standard reports
- Email support
- One organisation and one operating region

### Professional — recommended default

Everything in Starter, plus:

- Up to 25 active staff
- Full team management and staff workflows
- Advanced compliance and training tracking
- Approval workflows for timesheets and case notes
- Incident alerts and escalation tracking
- Custom forms and organisation templates
- Data exports
- Priority support
- Up to three locations or service teams
- AI assistant allowance: 500 staff queries/month

### Growth

Everything in Professional, plus:

- Up to 75 active staff
- Multi-site operations
- Advanced reporting and management dashboards
- Custom roles and permissions
- Bulk imports and exports
- API/webhook access where available
- Dedicated onboarding session
- Quarterly account review
- AI assistant allowance: 2,000 staff queries/month

### Enterprise

For providers with more than 75 active staff, multiple legal entities, complex permission models or procurement requirements.

- Unlimited operational locations
- Volume-based active-staff pricing
- SSO and advanced identity requirements by agreement
- Custom retention, audit and data-export requirements
- Dedicated implementation manager
- SLA and priority incident response
- Bespoke integrations
- Security and procurement documentation
- Contract terms and invoicing options

## Usage definitions

- **Active staff member:** A worker, manager or administrator who has logged in or been assigned work during the billing month.
- **Client:** A person receiving services. Clients are unlimited on all plans to avoid discouraging growth in participant or resident numbers.
- **Read-only user:** A user with viewing-only access, such as an auditor or family representative. Include a reasonable number in every plan; charge only for additional operational users.
- **AI query:** One completed request to the AI assistant. Do not charge for failed requests or system-generated context retrieval.

For users above the included allowance, charge **$12 per additional active staff member/month** on Starter and Professional. Growth and Enterprise pricing should be quoted when volume, support or integration requirements are material.

## One-time fees

| Service | Recommended fee |
|---|---:|
| Standard onboarding and configuration | Included in annual Professional and above |
| Starter guided setup | $499 one-off |
| Data import and mapping | $750–$2,500 depending on source and volume |
| Custom workflow/form configuration | $1,500–$5,000 |
| Bespoke integration | From $3,500 plus any third-party costs |
| Enterprise implementation | $5,000–$20,000, scoped after discovery |

Waive or credit the setup fee for annual prepayment during the launch period.

## Add-ons

Keep the core platform simple and offer optional modules only when they have a clear operational or compliance value.

- **Advanced analytics:** $149/month per organisation
- **Additional AI capacity:** $99 per 1,000 queries/month
- **SMS notifications:** usage-based, with a transparent pass-through fee plus a small administration margin
- **Premium support:** $299/month
- **Extra operating entity:** $199/month
- **Custom integration maintenance:** $250–$750/month per integration

Do not charge separately for core compliance, case notes, incidents, timesheets or client records. Those features are the product’s main differentiation and should be used to justify the subscription.

## Recommended profit-sharing model

Use a **waterfall model** rather than splitting gross subscription revenue. This protects the business from hosting, payment, support, AI, insurance, tax and implementation costs, while giving each party a transparent share of the commercial upside.

### Step 1: Calculate distributable profit

For each customer and billing period:

```text
Collected revenue excluding GST
− refunds, credits and bad debt
− payment processing and collection fees
− hosting, database, AI and messaging costs
− customer-specific third-party licences
− agreed customer support and implementation costs
− sales commission already paid
= Distributable profit
```

Do not deduct general business expenses twice. Maintain a monthly management report showing revenue, direct costs, deductions and the resulting distributable profit.

### Step 2: Split distributable profit

Recommended starting allocation:

| Party | Share of distributable profit | Commercial rationale |
|---|---:|---|
| **Carters Care Group** | **50%** | Product owner, sector operator, customer reference site, commercial risk and ongoing business direction |
| **CDXI** | **30%** | Platform development, engineering, maintenance, security, releases and technical delivery |
| **Sales consultant** | **20%** | Customer acquisition, qualified opportunities, demonstrations, proposal support and account conversion |

This allocation applies to customers materially sourced or converted by the sales consultant. For accounts generated entirely through Carters Care Group’s existing relationships or inbound marketing, the sales consultant share should be reduced or omitted by agreement before the opportunity is pursued.

### Sales consultant protection and limits

The sales consultant’s share should be paid only on **cash actually collected**, not signed contracts or invoices. It should:

- apply for the first **24 months** of each customer relationship;
- continue only while the consultant remains actively responsible for the agreed sales/account duties;
- exclude GST, refunds, credits, bad debt, implementation pass-through costs and third-party charges;
- be recalculated if a customer downgrades, pauses or materially changes scope;
- stop when the customer cancels, subject to a 30-day reconciliation of amounts already collected;
- be documented per account in a deal-registration schedule to avoid disputes over lead ownership.

After the initial 24-month period, the customer’s distributable profit can be split **60% to Carters Care Group and 40% to CDXI**, unless the parties agree that the consultant continues to provide substantive account-management or renewal services. If that ongoing work is required, reserve up to 10% for the consultant and allocate the remaining 90% between Carters Care Group and CDXI at 55%/45%.

### Worked example

For a Professional customer paying **$399/month excluding GST**, assume the following monthly deductions:

| Item | Amount |
|---|---:|
| Collected subscription revenue | $399.00 |
| Direct platform, payment, AI and support costs | ($99.00) |
| **Distributable profit** | **$300.00** |

The initial 24-month allocation would be:

- Carters Care Group: **$150.00**
- CDXI: **$90.00**
- Sales consultant: **$60.00**

These figures are illustrative. The agreement should use the actual monthly cost ledger and should be reviewed if support intensity, AI usage or implementation requirements change materially.

### Governance and contract terms

Put the arrangement in a written commercial agreement covering:

- definitions of revenue, direct costs and distributable profit;
- whether each party receives payment as a contractor, company or shareholder distribution;
- GST, income tax, superannuation and withholding responsibilities;
- ownership and licensing of the platform, source code, data and customer relationships;
- approval rights for discounts, refunds, free periods and non-standard contracts;
- monthly statements, payment timing and audit rights;
- treatment of renewals, referrals, channel partners and house accounts;
- confidentiality, privacy, restraint, conflicts and termination obligations;
- dispute resolution and what happens to customer accounts after termination.

Have an Australian commercial solicitor and accountant review the agreement before customer launch. This is a commercial framework, not legal, tax or financial advice.

## Commercial terms

- Offer a **14-day guided trial** with sample data and no credit card requirement.
- Allow prospects to test the Admin, Manager, Support Worker and Client experiences.
- Convert trial accounts to a paid plan only after the provider selects an organisation size and confirms staff count.
- Bill monthly or annually; annual plans receive two months free.
- Require a minimum three-month initial term for discounted onboarding or implementation work.
- Include a fair-use clause for storage, messaging and AI usage rather than imposing opaque limits.
- Provide a 30-day cancellation notice for monthly plans and renewal reminders for annual plans.
- Offer a 30-day migration/data-export window after cancellation.

## Why this model fits the product

The live platform demonstrates value across the full provider operating cycle: a management dashboard, client records, case notes, roster and timesheet workflows, incidents, onboarding, compliance, staff management, reports and an AI assistant. The Admin and Manager experiences create organisation-level value, while Support Worker and Client views broaden adoption without requiring every client or family member to be a paid seat.

A pure per-user model would make client and family access expensive and could discourage adoption. A pure per-participant model would undercharge providers with complex staffing and compliance needs. The hybrid model ties price to the operational workforce while keeping the client side open and predictable.

## Launch recommendation

Lead the market with **Professional at $399/month** as the visible “most popular” plan. Use Starter as a low-friction entry point, Growth as the upgrade path for multi-site providers, and Enterprise for procurement-led opportunities.

For the first 10–20 reference customers, offer:

- 20% off for the first 12 months
- Setup included
- A named implementation contact
- A structured product feedback program

Do not permanently discount the list price. Convert early adopters to the standard price at renewal with clear notice and a documented value review.

## Validation metrics before finalising price

Review these measures during the first six months:

- Trial-to-paid conversion by plan
- Average active staff per organisation
- Weekly active staff and client-portal adoption
- Time saved on rostering, notes and compliance administration
- Support hours per account
- AI queries per active staff member
- Churn and expansion revenue
- Percentage of customers using more than one core module

Raise prices or introduce higher tiers when Professional customers consistently exceed 25 staff, use multiple locations, or require dedicated support. Keep pricing anchored to measurable administrative savings and compliance visibility rather than feature count alone.

## Final recommendation

Launch with the four tiers above, make **Professional ($399/month, up to 25 active staff)** the default sales recommendation, and use **$12 per additional active staff member/month** as the simple expansion mechanic. Reassess after six months of real usage and customer interviews, with particular attention to implementation cost, support burden and the value providers place on compliance and multi-site management.

> **Pricing is a commercial starting point, not a regulated fee schedule.** Confirm GST treatment, contract terms, data-retention commitments and any sector-specific requirements with Australian legal, finance and compliance advisers before publishing publicly.
