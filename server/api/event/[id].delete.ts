export default defineEventHandler((event) => {
  const id = parseInt(getRouterParam(event, "id")!);
  return prisma.event.delete({
    where: { id },
  });
});
