import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  return prisma.event.findFirst({
    where: {
      title: "My First event",
    },
  });
});