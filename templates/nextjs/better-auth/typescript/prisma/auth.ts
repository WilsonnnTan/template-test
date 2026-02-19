import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from './prisma'

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
