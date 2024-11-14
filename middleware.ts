import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  
  const protectedRoutes = [
    "/portal",
    "/api/contracts",
    "/api/notices"
  ];

  if (
    protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route)) &&
    !token
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/portal/:path*",
    "/api/:path*"
  ]
};
