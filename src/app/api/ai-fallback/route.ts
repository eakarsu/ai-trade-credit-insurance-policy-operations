import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/api-auth";
import { recordMetadata } from "@/lib/record-policy";
import { records } from "@/lib/record-store";
import { buildFallbackInsights, FALLBACK_KINDS } from "@/lib/ai-fallback";
export const dynamic = "force-dynamic";
export async function POST(request: NextRequest) {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  const entity = typeof body.entity === "string" ? body.entity : "";
  if (!recordMetadata[entity]) return NextResponse.json({ error: "Unknown entity" }, { status: 404 });
  const kind = typeof body.kind === "string" ? body.kind : "portfolio-summary";
  if (!FALLBACK_KINDS.includes(kind as never)) return NextResponse.json({ error: "Unknown insight kind" }, { status: 404 });
  const rows = (await records(prisma, entity).findMany({ orderBy: [{ createdAt: "desc" }], take: 10000 })) as unknown as Record<string, unknown>[];
  return NextResponse.json({ result: buildFallbackInsights(rows, kind, entity) });
}
