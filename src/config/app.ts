export interface PageConfig {
  label: string;
  href: string;
  description: string;
  entities: string[];
  workflows: string[];
}

export interface EntityConfig {
  name: string;
  label: string;
  fields: Array<{ name: string; kind: "string" | "number" | "boolean" | "date" }>;
}

export interface WorkflowConfig {
  slug: string;
  title: string;
  description: string;
  prompt: string;
  fields: string[];
}

export const appConfig = {
  "slug": "ai-trade-credit-insurance-policy-operations",
  "title": "Trade Credit Insurance Policy Operations",
  "tagline": "Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms.",
  "accent": "rose"
};
export const pages: PageConfig[] = [
  {
    "label": "Intake & registers",
    "href": "/registers",
    "description": "Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms.",
    "entities": [
      "InsurancePolicy",
      "InsuredBuyer",
      "PolicyCondition"
    ],
    "workflows": [
      "policy-condition-extraction",
      "buyer-limit-exception-brief"
    ]
  },
  {
    "label": "Operational records",
    "href": "/workflow",
    "description": "Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms.",
    "entities": [
      "InsuredShipment",
      "BuyerPayment",
      "OverdueNotice"
    ],
    "workflows": [
      "shipment-declaration-draft",
      "overdue-notice-preparation"
    ]
  },
  {
    "label": "Review & delivery",
    "href": "/delivery",
    "description": "Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms.",
    "entities": [
      "CreditClaim",
      "ClaimEvidence",
      "InsurerDecision"
    ],
    "workflows": [
      "claim-evidence-gap-analysis",
      "insurer-response-summary"
    ]
  },
  {
    "label": "Tasks & requirements",
    "href": "/operations",
    "description": "Assignments, versioned rules and document requirements.",
    "entities": [
      "OperationalTask",
      "RuleVersion",
      "DocumentRequirement"
    ],
    "workflows": [
      "evidence-completeness-review",
      "operations-handoff-draft"
    ]
  }
];
export const entities: Record<string, EntityConfig> = {
  "InsurancePolicy": {
    "name": "InsurancePolicy",
    "label": "Insurance Policy",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "policyNumber",
        "kind": "string"
      },
      {
        "name": "insurer",
        "kind": "string"
      },
      {
        "name": "currency",
        "kind": "string"
      },
      {
        "name": "inception",
        "kind": "date"
      },
      {
        "name": "expiry",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      }
    ]
  },
  "InsuredBuyer": {
    "name": "InsuredBuyer",
    "label": "Insured Buyer",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "buyerCode",
        "kind": "string"
      },
      {
        "name": "country",
        "kind": "string"
      },
      {
        "name": "limitCents",
        "kind": "number"
      },
      {
        "name": "validUntil",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "insurancePolicyId",
        "kind": "string"
      }
    ]
  },
  "PolicyCondition": {
    "name": "PolicyCondition",
    "label": "Policy Condition",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "clauseNumber",
        "kind": "string"
      },
      {
        "name": "version",
        "kind": "string"
      },
      {
        "name": "conditionText",
        "kind": "string"
      },
      {
        "name": "noticeDays",
        "kind": "number"
      },
      {
        "name": "effectiveAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "insurancePolicyId",
        "kind": "string"
      }
    ]
  },
  "InsuredShipment": {
    "name": "InsuredShipment",
    "label": "Insured Shipment",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "insuredBuyerId",
        "kind": "string"
      },
      {
        "name": "invoiceNumber",
        "kind": "string"
      },
      {
        "name": "shippedAt",
        "kind": "date"
      },
      {
        "name": "amountCents",
        "kind": "number"
      },
      {
        "name": "dueAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "insurancePolicyId",
        "kind": "string"
      }
    ]
  },
  "BuyerPayment": {
    "name": "BuyerPayment",
    "label": "Buyer Payment",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "insuredShipmentId",
        "kind": "string"
      },
      {
        "name": "receivedAt",
        "kind": "date"
      },
      {
        "name": "amountCents",
        "kind": "number"
      },
      {
        "name": "reference",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "insurancePolicyId",
        "kind": "string"
      }
    ]
  },
  "OverdueNotice": {
    "name": "OverdueNotice",
    "label": "Overdue Notice",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "insuredShipmentId",
        "kind": "string"
      },
      {
        "name": "notifiedAt",
        "kind": "date"
      },
      {
        "name": "channel",
        "kind": "string"
      },
      {
        "name": "receipt",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "insurancePolicyId",
        "kind": "string"
      }
    ]
  },
  "CreditClaim": {
    "name": "CreditClaim",
    "label": "Credit Claim",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "insuredBuyerId",
        "kind": "string"
      },
      {
        "name": "lossCents",
        "kind": "number"
      },
      {
        "name": "deductibleCents",
        "kind": "number"
      },
      {
        "name": "lossDate",
        "kind": "date"
      },
      {
        "name": "rationale",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "insurancePolicyId",
        "kind": "string"
      }
    ]
  },
  "ClaimEvidence": {
    "name": "ClaimEvidence",
    "label": "Claim Evidence",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "creditClaimId",
        "kind": "string"
      },
      {
        "name": "evidenceType",
        "kind": "string"
      },
      {
        "name": "sourceReference",
        "kind": "string"
      },
      {
        "name": "receivedAt",
        "kind": "date"
      },
      {
        "name": "notes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "insurancePolicyId",
        "kind": "string"
      }
    ]
  },
  "InsurerDecision": {
    "name": "InsurerDecision",
    "label": "Insurer Decision",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "creditClaimId",
        "kind": "string"
      },
      {
        "name": "decisionText",
        "kind": "string"
      },
      {
        "name": "awardedCents",
        "kind": "number"
      },
      {
        "name": "decisionAt",
        "kind": "date"
      },
      {
        "name": "receipt",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "insurancePolicyId",
        "kind": "string"
      }
    ]
  },
  "OperationalTask": {
    "name": "OperationalTask",
    "label": "Operational Task",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "owner",
        "kind": "string"
      },
      {
        "name": "priority",
        "kind": "string"
      },
      {
        "name": "startAt",
        "kind": "date"
      },
      {
        "name": "dueAt",
        "kind": "date"
      },
      {
        "name": "done",
        "kind": "boolean"
      },
      {
        "name": "notes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "insurancePolicyId",
        "kind": "string"
      }
    ]
  },
  "RuleVersion": {
    "name": "RuleVersion",
    "label": "Rule Version",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "jurisdiction",
        "kind": "string"
      },
      {
        "name": "version",
        "kind": "string"
      },
      {
        "name": "effectiveAt",
        "kind": "date"
      },
      {
        "name": "expiresAt",
        "kind": "date"
      },
      {
        "name": "sourceUrl",
        "kind": "string"
      },
      {
        "name": "requirementText",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "insurancePolicyId",
        "kind": "string"
      }
    ]
  },
  "DocumentRequirement": {
    "name": "DocumentRequirement",
    "label": "Document Requirement",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "category",
        "kind": "string"
      },
      {
        "name": "requiredBy",
        "kind": "date"
      },
      {
        "name": "sourceReference",
        "kind": "string"
      },
      {
        "name": "evidenceReference",
        "kind": "string"
      },
      {
        "name": "reviewNotes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "insurancePolicyId",
        "kind": "string"
      }
    ]
  }
};
export const workflows: WorkflowConfig[] = [
  {
    "slug": "policy-condition-extraction",
    "title": "Policy condition extraction",
    "description": "Policy condition extraction using selected insurance policy records and supplied evidence.",
    "prompt": "Policy condition extraction for Trade Credit Insurance Policy Operations. Operational scope: Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms. Specific AI scope: Extract policy conditions and flag incomplete claim packets. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "buyer-limit-exception-brief",
    "title": "Buyer limit exception brief",
    "description": "Buyer limit exception brief using selected insurance policy records and supplied evidence.",
    "prompt": "Buyer limit exception brief for Trade Credit Insurance Policy Operations. Operational scope: Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms. Specific AI scope: Extract policy conditions and flag incomplete claim packets. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "shipment-declaration-draft",
    "title": "Shipment declaration draft",
    "description": "Shipment declaration draft using selected insurance policy records and supplied evidence.",
    "prompt": "Shipment declaration draft for Trade Credit Insurance Policy Operations. Operational scope: Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms. Specific AI scope: Extract policy conditions and flag incomplete claim packets. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "overdue-notice-preparation",
    "title": "Overdue notice preparation",
    "description": "Overdue notice preparation using selected insurance policy records and supplied evidence.",
    "prompt": "Overdue notice preparation for Trade Credit Insurance Policy Operations. Operational scope: Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms. Specific AI scope: Extract policy conditions and flag incomplete claim packets. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "claim-evidence-gap-analysis",
    "title": "Claim evidence gap analysis",
    "description": "Claim evidence gap analysis using selected insurance policy records and supplied evidence.",
    "prompt": "Claim evidence gap analysis for Trade Credit Insurance Policy Operations. Operational scope: Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms. Specific AI scope: Extract policy conditions and flag incomplete claim packets. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "insurer-response-summary",
    "title": "Insurer response summary",
    "description": "Insurer response summary using selected insurance policy records and supplied evidence.",
    "prompt": "Insurer response summary for Trade Credit Insurance Policy Operations. Operational scope: Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms. Specific AI scope: Extract policy conditions and flag incomplete claim packets. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "evidence-completeness-review",
    "title": "Evidence completeness review",
    "description": "Evidence completeness review using selected insurance policy records and supplied evidence.",
    "prompt": "Evidence completeness review for Trade Credit Insurance Policy Operations. Operational scope: Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms. Specific AI scope: Extract policy conditions and flag incomplete claim packets. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "operations-handoff-draft",
    "title": "Operations handoff draft",
    "description": "Operations handoff draft using selected insurance policy records and supplied evidence.",
    "prompt": "Operations handoff draft for Trade Credit Insurance Policy Operations. Operational scope: Track buyer credit limits, shipment declarations, overdue notices and claim evidence against versioned policy terms. Specific AI scope: Extract policy conditions and flag incomplete claim packets. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  }
];
export function findPage(href:string){return pages.find(p=>p.href===href);}
