<template>
  <div v-if="data">
    <Galleria :value="data.gallery" :num-visible="3">
      <template #item="slotProps">
        <div
          class="w-full h-48 bg-white relative border-b border-gray-100"
        >
          <NuxtImg
            :src="slotProps.item.src"
            :alt="slotProps.item.alt"
            class="w-full h-full object-contain"
            :class="slotProps.item.imgClass"
          />
        </div>
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.src" :alt="slotProps.item.alt" class="w-full h-8 bg-gray-100" />
      </template>
    </Galleria>
    
    <div class="space-y-2 p-4">
      <div class="flex flex-col gap-2">
        <span class="font-bold text-lg text-indigo-500">{{ data.title }}</span>
        <div class="flex gap-2">
          <div v-for="techStack in data.techStack" :key="techStack.label">
            <Icon :name="techStack.icon" />
          </div>
        </div>
      </div>
      <h2 class="font-medium">About the project</h2>
      <p class="text-xs line-clamp-4">
        {{ data.description }}
      </p>
    </div>
    <div class="p-4 space-y-1">
      <Button icon="pi pi-github" label="Github" fluid outlined />
      <Button icon="pi pi-external-link" label="Demo" fluid outlined />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TProject } from "@libs/types";
import type { DynamicDialogOptions } from "primevue/dynamicdialogoptions";
const option = inject<Ref<DynamicDialogOptions>>("dialogRef");
const data = ref<TProject | null>(null);

onMounted(() => {
  if (option?.value) {
    data.value = option.value.data;
  }
});
</script>

<style></style>
