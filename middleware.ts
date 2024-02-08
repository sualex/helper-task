import { NextRequest, NextResponse } from "next/server";

import * as api from "@/shared/api";
import { parseError } from "@/shared/lib/error";
import {
  isLogOut,
  isLogin,
  isNavigation,
  isSignUp,
  logger,
} from "@/shared/lib/server";

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
  //todo move to api routes
  if (isLogin(req) || isLogOut(req) || isSignUp(req)) {
    try {
      let value;
      if (isLogin(req)) {
        value = (
          await authApi.login({
            loginDto: await req?.json(),
          })
        )?.value;
      }
      if (isSignUp(req)) {
        value = (
          await authApi.signUp({
            signUpDto: await req?.json(),
          })
        )?.value;
      }
      const response = NextResponse.json({});
      if (value) {
        response.cookies.set({
          name: "auth",
          value,
          httpOnly: true,
        });
      } else {
        //logout
        response.cookies.delete("auth");
      }
      return response;
    } catch (error) {
      const { message, status } = await parseError(error);
      const response = NextResponse.json({ message }, { status });
      response.cookies.delete("auth");
      return response;
    }
  }
  //
  const requestHeaders = new Headers(req.headers);
  const apiKey = req.cookies.get("auth")?.value;
  if (apiKey) {
    requestHeaders.set("X-API-KEY", apiKey);
  }
  //
  const targetUrl = new URL(req?.nextUrl?.pathname, API_URL);
  log(`${req?.nextUrl?.href} -> ${targetUrl?.href}`);
  return NextResponse.rewrite(targetUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}
