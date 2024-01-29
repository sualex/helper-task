import { NextRequest, NextResponse } from "next/server";

// const apiUrl = process.env.API_URL;

const apiUrl = `https://frontend-test-api.yoldi.agency`;

export const config = {
  matcher: ["/api/:path*"],
};

export async function middleware(req: NextRequest, res: NextResponse) {
  const accept = req?.headers.get("accept");
  if (accept !== "application/json") {
    return NextResponse.next();
  }
  const date = new Date();
  console.log(
    `[${date.toLocaleDateString()} ${date.toLocaleTimeString()}]`,
    ` REWRITE`,
    ` ${req?.method} `,
    `${apiUrl}${req?.nextUrl?.pathname}`
  );
  return NextResponse.rewrite(new URL(req?.nextUrl?.pathname, apiUrl));
}
