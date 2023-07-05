export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newEvent = await prisma.event.create({
    data: body,
  });
  return newEvent;
});
