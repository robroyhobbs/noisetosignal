import { NextResponse } from "next/server";

/** Subscribe UI is hidden until email is wired. Keep endpoint closed. */
export async function POST() {
  return NextResponse.json({ error: "Not available" }, { status: 404 });
}

export async function GET() {
  return NextResponse.json({ error: "Not available" }, { status: 404 });
}
