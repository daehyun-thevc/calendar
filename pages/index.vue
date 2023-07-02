<script lang="ts" setup>
const newItem = ref<{
  done: boolean;
  title: string;
  id: number;
  description: string;
  createdAt: string;
  updatedAt: string;
} | null>(null);
</script>

<template>
  <UContainer class="py-4 max-w-[400px]">
    <EventInput class="mb-4" @add-item="newItem = $event" />
    <EventList :new-item="newItem" />
  </UContainer>
</template>

<style scoped></style>
