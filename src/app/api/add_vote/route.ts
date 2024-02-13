import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const itemName = searchParams.get("itemName");

  try {
    if (!itemName) throw new Error("itemName required");
    await sql`INSERT INTO Votes (Item, Count) VALUES (${itemName}, 0);`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const votes = await sql`SELECT * FROM Votes WHERE Item = ${itemName};`;
  const data = votes.rows;
  return NextResponse.json({ data }, { status: 200 });
}
