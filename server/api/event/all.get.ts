export default defineEventHandler((event) => {
  return prisma.event.findMany();
});
