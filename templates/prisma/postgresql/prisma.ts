import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '@/generated/prisma/client'

const adapter = new PrismaMariaDb(
  {
    // Note: Change According To Your DATABASE_URL
    host: "localhost",
    port: 3306,
    connectionLimit: 5,
    database: "database_name",
  },
)
const prisma = new PrismaClient({ adapter })

export { prisma }