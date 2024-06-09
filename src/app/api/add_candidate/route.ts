import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const itemName = searchParams.get("item");

  try {
    if (!itemName) throw new Error("itemName required");
    // 既に同名のItemが存在する場合は追加しない
    await sql`INSERT INTO Votes (Item, Count) SELECT ${itemName}, 0 WHERE NOT EXISTS (SELECT 1 FROM Votes WHERE Item = ${itemName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const votes = await sql`SELECT * FROM Votes WHERE Item = ${itemName};`;
  const data = votes.rows;
  console.log(data);
  return NextResponse.json({ data }, { status: 200 });
}
