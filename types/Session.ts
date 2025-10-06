import { auth, authClient } from '@/lib/auth';

export type Session = typeof auth.$Infer.Session;
export type ClientSession = typeof authClient.$Infer.Session;
