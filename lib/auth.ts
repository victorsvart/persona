import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from './prisma';
import { username } from 'better-auth/plugins';
import { nextCookies } from 'better-auth/next-js';
import { createAuthClient } from 'better-auth/react';
import { usernameClient } from 'better-auth/client/plugins';

export const auth = betterAuth({
  plugins: [username(), nextCookies()],
  emailAndPassword: {
    enabled: true,
  },
  changeEmail: {
    enabled: true,
  },
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
});

export const authClient = createAuthClient({
  plugins: [usernameClient()],
});
