import { PrismaClient } from "../src/generated/prisma/client";
// OR if you generated inside src: from '../generated/prisma/client'
// prisma/db.ts
import { PrismaPg } from '@prisma/adapter-pg' // PostgreSQL
// OR
// import { PrismaMysql } from '@prisma/adapter-mysql' // MySQL
// import { PrismaLibSQL } from '@prisma/adapter-libsql' // SQLite

import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ 
  adapter 
})

export { prisma }