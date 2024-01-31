import { NextRequest } from "next/server";

export const isNavigation = (req: NextRequest) =>
  ["text/html", "application/xhtml+xml"].some((v) =>
    req?.headers.get("accept")?.includes(v)
  );

export const isLogin = (req: NextRequest) =>
  req?.nextUrl?.pathname?.endsWith("/auth/login");

export const isLogOut = (req: NextRequest) =>
  req?.nextUrl?.pathname?.endsWith("/api/auth/logout");

export const isSignUp = (req: NextRequest) =>
  req?.nextUrl?.pathname?.endsWith("/api/auth/sign-up");

export const logger = (
  prepend = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
) => {
  return (message: string) => console.log(prepend, "|", message);
};
