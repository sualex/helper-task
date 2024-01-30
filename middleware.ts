import { NextRequest, NextResponse } from "next/server";

import * as api from "@/shared/api";
import { LoginDto } from "@/shared/api/yoldi";
import { isLogin, isNavigation, logger } from "@/shared/lib/server";

const API_URL = `https://frontend-test-api.yoldi.agency`;

export const config = {
  matcher: ["/api/:path*"],
};

const log = logger();

export const configuration = new api.Configuration({
  basePath: API_URL,
  headers: {
    // Accept: "application/json",
  },
});

const authApi = new api.AuthApi(configuration);

export async function middleware(req: NextRequest) {
  if (isNavigation(req)) {
    return NextResponse.next();
  }

  if (isLogin(req)) {
    try {
      const loginDto: LoginDto = await req?.json();
      const { value } = await authApi.login({
        loginDto,
      });
      const response = NextResponse.json({});
      response.cookies.set({
        name: "auth",
        value,
        httpOnly: true,
      });
      return response;
    } catch (error) {
      const response = NextResponse.json(
        { message: "Что-то пошло не так" },
        { status: 500 }
      );
      response.cookies.delete("auth");
      return response;
    }
  }

  const requestHeaders = new Headers(req.headers);
  const apiKey = req.cookies.get("auth")?.value;
  if (apiKey) {
    requestHeaders.set("X-API-KEY", apiKey);
  }

  const targetUrl = new URL(req?.nextUrl?.pathname, API_URL);
  log(`${req?.nextUrl?.href} -> ${targetUrl?.href}`);
  return NextResponse.rewrite(targetUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}
