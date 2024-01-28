import { NextRequest, NextResponse } from "next/server";

// const apiUrl = process.env.API_URL;

const apiUrl = `https://frontend-test-api.yoldi.agency`;

export const config = {
  matcher: ["/api/:path*"],
};

export async function middleware(req: NextRequest, res: NextResponse) {
  const date = new Date();
  console.log(
    `[${date.toLocaleDateString()} ${date.toLocaleTimeString()}]`,
    ` REWRITE`,
    ` ${req?.method} `,
    `${apiUrl}${req?.nextUrl?.pathname}`
  );
  //back-end proxy
  return NextResponse.rewrite(
    new URL(`${apiUrl}${req?.nextUrl?.pathname}`, req?.url)
  );
}
