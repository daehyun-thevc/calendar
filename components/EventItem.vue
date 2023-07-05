<script lang="ts" setup>
import { vOnClickOutside } from "@vueuse/components";

type Props = {
  id: number;
  title: string;
  done: boolean;
};

const props = defineProps<Props>();
const title = ref(props.title);
const done = ref(props.done);
const isTitleEditing = ref(false);
const updateEvent = (body: Partial<Exclude<Props, "id">>) => {
  $fetch(`/api/event/${props.id}`, {
    method: "PATCH",
    body,
  });
};
const emits = defineEmits<{
  delete: [id: number];
}>();
const deleteEvent = (id: number) => {
  $fetch(`/api/event/${props.id}`, {
    method: "DELETE",
  });
  emits("delete", id);
};
</script>

<template>
  <div
    class="border rounded-md py-2 px-4"
    :class="{
      'border-gray-400 text-gray-400': done,
      'border-green-500 text-green-500': !done,
    }"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <UToggle
          v-model="done"
          @update:model-value="updateEvent({ done: $event })"
          on-icon="i-jam-check"
          off-icon="i-jam-close"
        />
        <div
          v-if="!isTitleEditing"
          @click="isTitleEditing = true"
          class="px-3 py-2 cursor-pointer"
          :class="{ 'text-black': !done }"
        >
          {{ title }}
        </div>
        <div
          v-else
          class="flex gap-2"
          v-on-click-outside="() => (isTitleEditing = false)"
        >
          <UInput
            v-model="title"
            variant="none"
            autofocus
            size="md"
            :ui="{ size: { md: 'text-md' } }"
          />
          <UButton
            @click="
              () => {
                updateEvent({ title });
                isTitleEditing = false;
              }
            "
          >
            수정
          </UButton>
        </div>
      </div>
      <UIcon
        name="i-jam-trash"
        class="text-gray-300 hover:text-red-400 cursor-pointer text-lg"
        @click="deleteEvent(id)"
      />
    </div>
  </div>
</template>
