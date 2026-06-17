import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/sqldb";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") ?? "";
  const db = getDb();

  const motif = `%${q}%`;
  const rows = db("SELECT id, nom, prix FROM produits WHERE nom LIKE ?", [motif]);

  return NextResponse.json({ resultats: rows });
}
