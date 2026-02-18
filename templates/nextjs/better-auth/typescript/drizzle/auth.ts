import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    // choose your database
    provider: "pg", // or "mysql", "sqlite"
  }),
  // Search for more auth method on https://www.better-auth.com/docs/authentication/email-password
  emailAndPassword: {
    enabled: true,
  },
});