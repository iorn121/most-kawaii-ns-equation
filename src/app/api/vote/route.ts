import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const item = searchParams.get("item");

  try {
    if (!item) throw new Error("Item required");
    await sql`UPDATE Votes SET Count = Count + 1 WHERE Item = ${item};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const result = await sql`SELECT * FROM Votes WHERE Item=${item};`;
  const count = result.rows[0].count;
  return NextResponse.json({ count }, { status: 200 });
}
