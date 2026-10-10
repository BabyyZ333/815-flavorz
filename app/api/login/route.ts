import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

export async function POST(request: Request) {
  const { password } = await request.json();

  const secret = process.env.SITE_PASSWORD;
  const sessionSecret = process.env.SESSION_SECRET;

  if (!secret || !sessionSecret || typeof password !== "string") {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const submitted = Buffer.from(password);
  const expected = Buffer.from(secret);

  if (
    submitted.length !== expected.length ||
    !timingSafeEqual(submitted, expected)
  ) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const token = createHmac("sha256", sessionSecret)
    .update("815flavorz-access")
    .digest("hex");

  const response = NextResponse.json({ success: true });

  response.cookies.set("site_access", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return response;
}
