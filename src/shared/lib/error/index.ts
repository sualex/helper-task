import { ResponseError } from "@/shared/api/yoldi";
import HttpStatusCode from "@/shared/lib/error/http-status-code";

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

export interface IError {
  message: string;
  status?: HttpStatusCode;
}

export async function getError(error: unknown) {
  const result: IError = {
    message: "Неизвестная ошибка",
  };
  try {
    const { response } = error as ResponseError;
    const body = await response?.json();
    result.message = body?.message || result.message;
    result.status = response?.status || 500;
  } catch {
    const { message } = toErrorWithMessage(error);
    result.message = message || result.message;
  }
  return result;
}
