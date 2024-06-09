import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const itemName = searchParams.get("item");
  try {
    if (itemName) {
      await sql`DELETE FROM Votes WHERE item = ${itemName}`;
    }
    return NextResponse.json({ data: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
