import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await sql`DELETE FROM Votes WHERE id NOT IN(SELECT min_id from(SELECT MIN(id) min_id FROM Votes GROUP BY item) tmp);`;
    return NextResponse.json({ data: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
