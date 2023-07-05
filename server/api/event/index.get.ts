export default defineEventHandler((event) => {
  return prisma.event.findFirst({
    where: {
      title: "My First event",
    },
  });
});
