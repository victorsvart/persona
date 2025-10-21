/* About this:  https://www.better-auth.com/docs/installation */
import { prisma } from '@/prisma/client';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import { username } from 'better-auth/plugins';
import { createAuthClient } from 'better-auth/react';
import { usernameClient } from 'better-auth/client/plugins';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql', // or "mysql", "sqlite", ...etc
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [username(), nextCookies()],
  /* Uncomment this if you want OAuth somewhere. E.g with Github below. */
  //   socialProviders: {
  //     github: {
  //       clientId: process.env.GITHUB_CLIENT_ID as string,
  //       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
  //     },
  //   },
});

export const clientAuth = createAuthClient({
  plugins: [usernameClient()],
});
