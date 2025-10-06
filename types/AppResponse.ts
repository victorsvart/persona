export type AppError = {
  code: number | undefined;
  message: string;
};

export type AppResponse = {
  success: boolean;
  error: AppError | undefined;
};
