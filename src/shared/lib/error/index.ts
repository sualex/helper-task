import { ResponseError } from "@/shared/api/yoldi";

export type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;
  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

export async function getErrorMessage(error: unknown) {
  if (error instanceof ResponseError) {
    try {
      const { response } = error;
      if (response) {
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType?.includes("application/json")) {
          const responseData = await response.json();
          if (responseData.message) {
            return responseData?.message;
          }
        }
      }
    } catch {
      //
    }
  }
  return toErrorWithMessage(error).message;
}
