import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const event = await prisma.event.create({
    data: {
      title: "My First event",
      description: "I'm so excited to host my first event!",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
