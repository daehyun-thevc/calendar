<script lang="ts" setup>
type Props = {
  newItem: {
    done: boolean;
    title: string;
    id: number;
    description: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};
const props = defineProps<Props>();
watch(
  () => props.newItem,
  (newItem) => {
    if (newItem === null) return;
    events.value = [...events.value, newItem];
  }
);

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
