# Trade Credit Insurance Policy Operations

Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms.

## Implemented records

- **Insurance Policy**: name, policy Number, insurer, currency, inception, expiry, status.
- **Insured Buyer**: name, buyer Code, country, limit Cents, valid Until, status.
- **Policy Condition**: title, clause Number, version, condition Text, notice Days, effective At, status.
- **Insured Shipment**: title, invoice Number, shipped At, amount Cents, due At, status.
- **Buyer Payment**: title, received At, amount Cents, reference, status.
- **Overdue Notice**: title, notified At, channel, receipt, status.
- **Credit Claim**: title, loss Cents, deductible Cents, loss Date, rationale, status.
- **Claim Evidence**: title, evidence Type, source Reference, received At, notes, status.
- **Insurer Decision**: title, decision Text, awarded Cents, decision At, receipt, status.
- **Operational Task**: title, owner, priority, start At, due At, done, notes, status.
- **Rule Version**: title, jurisdiction, version, effective At, expires At, source Url, requirement Text, status.
- **Document Requirement**: title, category, required By, source Reference, evidence Reference, review Notes, status.

## AI workflows

- Policy condition extraction: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Buyer limit exception brief: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Shipment declaration draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Overdue notice preparation: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Claim evidence gap analysis: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Insurer response summary: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Evidence completeness review: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Operations handoff draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.

## Calculations

- Insured receivable exposure: Calculate outstanding exposure, limit excess and a policy-input recovery scenario; policy exclusions and insurer decisions require review.
- Insurance Policy evidence checklist: Check source presence against an explicitly supplied document list; reviewer assesses adequacy.
- Operational deadline queue: Compute overdue items from entered dates and completed flags; no external notifications.

## Workspace features

Role-based login and account management; validated create/edit/delete; required parent and sibling relationships; search and pagination; atomic JSON imports; CSV/JSON exports; optimistic concurrency; two independent human reviews; immutable source-text uploads with independent review; dated task calendar; aggregate reports; searchable audit trail; model catalog and administrator AI settings; configured HTTPS connectors with approval, idempotency and receipt checks.

## Integration boundaries

A finite working scope, not every conceivable feature. No production regulator, insurer, carrier, court, university or clinical integration is preconfigured. Source uploads support text/CSV/JSON/Markdown, not OCR/PDF parsing. AI produces drafts and cannot authorize clinical handling, adjudicate rights, select recipients or jurors, establish eligibility, certify regulatory compliance or send submissions. Live external execution requires a configured adapter and independent human approval of the current record. Calculations use supplied rules and units; example rules are fictional.
