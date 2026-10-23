export type FallbackKind = "portfolio-summary" | "risk-flags" | "next-actions";
export const FALLBACK_KINDS: FallbackKind[] = ["portfolio-summary", "risk-flags", "next-actions"];
type Row = Record<string, unknown>;
const num = (v: unknown) => { const n = Number(v); return Number.isFinite(n) ? n : 0; };
function amountOf(r: Row): number { for (const k of ["amount","claimAmount","limitAmount","exposure","value"]) if (r[k] != null) return num(r[k]); return 0; }
export function buildFallbackInsights(rows: Row[], kind: string, entity = "records") {
  const k: FallbackKind = (FALLBACK_KINDS as string[]).includes(kind) ? (kind as FallbackKind) : "portfolio-summary";
  const list = rows || []; const total = list.length;
  const totalAmount = list.reduce((s, r) => s + amountOf(r), 0);
  const zeroAmount = list.filter((r) => !(amountOf(r) > 0)).length;
  const approved = list.filter((r) => r.status === "Approved").length;
  const open = total - approved;
  const sections = k === "risk-flags"
    ? [{ title: "Records needing review", detail: `${open} of ${total} ${entity} records are not Approved.` }, { title: "Zero-value records", detail: `${zeroAmount} records have an amount of 0 and are preserved, not hidden.` }, { title: "Approved records", detail: `${approved} records are Approved.` }]
    : k === "next-actions"
    ? [{ title: "Next action 1", detail: open ? `Review the ${open} unapproved ${entity} records first.` : "No unapproved records; no action required." }, { title: "Next action 2", detail: `Confirm the ${zeroAmount} zero-amount records are intentional.` }, { title: "Next action 3", detail: `Retain evidence for the ${approved} approved records.` }]
    : [{ title: "Portfolio summary", detail: `${total} ${entity} records totalling ${totalAmount.toFixed(2)}.` }, { title: "Status mix", detail: `Approved: ${approved}; Not approved: ${open}; Zero amount: ${zeroAmount}.` }, { title: "Empty values", detail: "Empty and zero values are counted as 0 and shown, not omitted." }];
  return { aiGenerated: false, source: "deterministic-fallback", label: "Deterministic fallback — no AI provider called", kind: k, entity, recordCount: total, totalAmount, metrics: [{ label: "Records", value: total }, { label: "Total amount", value: totalAmount }, { label: "Zero amount", value: zeroAmount }, { label: "Approved", value: approved }], sections };
}
