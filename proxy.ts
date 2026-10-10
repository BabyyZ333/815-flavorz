import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === "/login" ||
    pathname === "/api/login" ||
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const secret = process.env.SESSION_SECRET;
  const cookie = request.cookies.get("site_access")?.value;

  if (secret && cookie) {
    const expected = createHmac("sha256", secret)
      .update("815flavorz-access")
      .digest("hex");

    const a = Buffer.from(cookie);
    const b = Buffer.from(expected);

    if (a.length === b.length && timingSafeEqual(a, b)) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/((?!api/login|_next/static|_next/image).*)"],
};
