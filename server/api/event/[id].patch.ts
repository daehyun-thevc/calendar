export default defineEventHandler(async (event) => {
  const id = parseInt(getRouterParam(event, "id")!);
  const body = await readBody(event);
  return prisma.event.update({
    where: { id },
    data: body,
  });
});
