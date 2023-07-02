<script lang="ts" setup>
const newEvent = ref("");
const addNewEvent = () => {
  const trimmed = newEvent.value.trim();
  if (trimmed === "") return;
  $fetch("/api/event", {
    method: "POST",
    body: {
      title: trimmed,
      description: "",
    },
  });
};
</script>

<template>
  <div class="flex gap-2 justify-center">
    <div class="flex-1">
      <UInput
        icon="i-jam-write"
        size="md"
        color="white"
        :trailing="false"
        :model-value="newEvent"
        @update:model-value="newEvent = $event"
        autofocus
      />
    </div>
    <UButton @click="addNewEvent()">등록</UButton>
  </div>
</template>
