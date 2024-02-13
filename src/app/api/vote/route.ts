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

  const result = await sql`SELECT * FROM Votes;`;
  const data = result.rows;
  return NextResponse.json({ data }, { status: 200 });
}
