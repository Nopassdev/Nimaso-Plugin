import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const seed = async () => {
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    console.log("Seeding done")
    await prisma.$disconnect()
  })