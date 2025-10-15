import { Prisma } from '@/prisma/lib/generated/prisma';

export class PrismaError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export function handlePrismaError(error: unknown): PrismaError {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        throw new PrismaError(`Duplicate field: ${error.meta?.target}`, 409);
      case 'P2025':
        throw new PrismaError('Record not found', 404);
      case 'P2003':
        throw new PrismaError('Invalid reference to related record', 400);
      default:
        throw new PrismaError(`Database error: ${error.message}`, 400);
    }
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    throw new PrismaError('Validation error: check your data format', 400);
  }

  if (
    error instanceof Prisma.PrismaClientInitializationError ||
    error instanceof Prisma.PrismaClientRustPanicError
  ) {
    throw new PrismaError('Internal database error', 500);
  }

  throw new PrismaError('Unexpected database error', 500);
}
