import { NextRequest } from "next/server";

export const navigation = (req: NextRequest) =>
  ["text/html", "application/xhtml+xml"].some((v) =>
    req?.headers.get("accept")?.includes(v)
  );

export const logger = (
  prepend = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
) => {
  return (message: string) => console.log(prepend, "|", message);
};
