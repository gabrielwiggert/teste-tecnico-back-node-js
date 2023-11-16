type AppErrorTypes = "ExistsCpfException" | "NotFoundCpfException" | "unauthorized" | "InvalidCpfException";

export interface AppError {
  type: AppErrorTypes;
  message: string;
}

export function isAppError(error: object): error is AppError {
  return (error as AppError).type !== undefined;
}

export function errorTypeToStatusCode(type: AppErrorTypes) {
  if (type === "ExistsCpfException") return 409;
  if (type === "NotFoundCpfException") return 404;
  if (type === "unauthorized") return 401;
  if (type === "InvalidCpfException") return 422;
  
  return 400;
}

export function conflictError(message?: string): AppError {
  return { type: "ExistsCpfException", message };
}

export function notFoundError(message?: string): AppError {
  return { type: "NotFoundCpfException", message };
}

export function unauthorizedError(message?: string): AppError {
  return { type: "unauthorized", message };
}

export function wrongSchemaError(message?: string): AppError {
  return { type: "InvalidCpfException", message };
}
