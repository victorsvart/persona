export type AppError = {
  code: number | string;
  message: string;
};

export type AppResponse = {
  data: unknown;
  error: AppError | null;
};

export function unexpectedError(err: Error): AppResponse {
  return {
    data: null,
    error: {
      code: 500,
      message: err.message,
    },
  };
}
