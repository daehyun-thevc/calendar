<script lang="ts" setup>
const newEvent = ref("");
const input = ref<ComponentPublicInstance | null>(null);
const addNewEvent = async () => {
  const trimmed = newEvent.value.trim();
  if (trimmed === "") return;
  const result = await $fetch("/api/event", {
    method: "POST",
    body: {
      title: trimmed,
    },
  });
  emits("addItem", result);
};
defineShortcuts({
  "/": () => {
    (input.value!.$refs.input as HTMLInputElement).focus();
  },
});
const emits = defineEmits<{
  addItem: [
    item: {
      done: boolean;
      title: string;
      id: number;
      description: string;
      createdAt: string;
      updatedAt: string;
    }
  ];
}>();
</script>

<template>
  <div class="flex gap-2 justify-center">
    <div class="flex-1">
      <UInput
        icon="i-jam-write"
        size="md"
        color="white"
        :trailing="false"
        v-model="newEvent"
        autofocus
        ref="input"
      />
    </div>
    <UButton @click="addNewEvent()">등록</UButton>
  </div>
</template>
