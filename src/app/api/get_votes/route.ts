import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const item = searchParams.get("item");

  try {
    const votes = await sql`SELECT * FROM Votes vote ORDER BY vote.count DESC;`;
    const result = votes.rows;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
