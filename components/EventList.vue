<script lang="ts" setup>
const { data, error, pending } = await useFetch("/api/event/all");
const events = ref<NonNullable<typeof data.value>>([]);
watch(
  pending,
  (isPending) => {
    if (isPending) return;
    if (error.value) {
      throw createError({ statusCode: 500 });
    }
    events.value = data.value ?? [];
  },
  { immediate: true }
);
</script>

<template>
  <ul class="flex flex-col gap-2">
    <li v-for="{ id, title, done } of events" :key="id">
      <EventItem :id="id" :title="title" :done="done" />
    </li>
  </ul>
</template>
