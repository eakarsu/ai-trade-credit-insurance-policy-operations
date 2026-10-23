import { test } from "node:test";
import assert from "node:assert/strict";
process.env.OPENROUTER_API_KEY = ""; process.env.OPENAI_API_KEY = "";
import { buildFallbackInsights } from "../src/lib/ai-fallback";
const rows = [{ status: "Approved", amount: 0 }, { status: "Draft", amount: 50 }];
test("fallback is labelled aiGenerated:false over own records", () => { for (const k of ["portfolio-summary","risk-flags","next-actions"]) { const r = buildFallbackInsights(rows, k, "CreditClaim"); assert.equal(r.aiGenerated, false); assert.equal(r.source, "deterministic-fallback"); assert.ok(r.sections.length >= 3); } });
test("fallback preserves 0 and empty", () => { const r = buildFallbackInsights([], "portfolio-summary"); assert.equal(r.recordCount, 0); assert.equal(r.totalAmount, 0); assert.ok(r.metrics.some((m) => m.value === 0)); });
