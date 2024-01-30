import { NextRequest, NextResponse } from "next/server";

import { logger, navigation } from "@/shared/lib/server";

const API_URL = `https://frontend-test-api.yoldi.agency`;

export const config = {
  matcher: ["/api/:path*"],
};

const log = logger();

export async function middleware(req: NextRequest, res: NextResponse) {
  if (navigation(req)) {
    return NextResponse.next();
  }
  const targetUrl = new URL(req?.nextUrl?.pathname, API_URL);
  log(`${req?.nextUrl?.href} -> ${targetUrl?.href}`);
  return NextResponse.rewrite(new URL(req?.nextUrl?.pathname, API_URL));
}
