import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from '@/generated/prisma/client';

const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    // choose your database
    provider: 'postgresql', // or "mysql", "mongodb", ...etc
  }),
  // Search for more auth method on https://www.better-auth.com/docs/authentication/email-password
  emailAndPassword: {
    enabled: true,
  },
});
