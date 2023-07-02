<script lang="ts" setup>
type Props = {
  id: number;
  title: string;
  done: boolean;
};
const { id, done } = defineProps<Props>();
const status = ref(done);
watch(status, (newStatus) => {
  $fetch(`/api/event/${id}`, {
    method: "PATCH",
    body: { done: newStatus },
  });
});
</script>

<template>
  <div
    class="flex items-center justify-between gap-4 border rounded-md p-2"
    :class="{
      'border-gray-300 text-gray-300': status,
      'border-green-300': !status,
    }"
  >
    <div class="flex items-center gap-4">
      <UIcon name="i-jam-tag" class="text-gray-400" /> {{ title }}
    </div>
    <UToggle v-model="status" on-icon="i-jam-check" off-icon="i-jam-close" />
  </div>
</template>
