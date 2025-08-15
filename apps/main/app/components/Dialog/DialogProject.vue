<template>
  <div v-if="data">
    <Galleria :value="data.gallery" :num-visible="3">
      <template #item="slotProps">
        <div
          class="w-full h-48 md:h-52 bg-white relative border-b border-gray-100"
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
        <img
          :src="slotProps.item.src"
          :alt="slotProps.item.alt"
          class="w-full h-8 bg-gray-100"
        />
      </template>
    </Galleria>

    <div class="p-4 md:p-8 space-y-4">
      <div class="space-y-2">
        <div class="flex flex-col gap-2 md:gap-4">
          <span class="font-bold text-lg md:text-xl text-indigo-500">{{
            data.title
          }}</span>
          <div class="flex gap-2">
            <div v-for="techStack in data.techStack" :key="techStack.label">
              <Icon :name="techStack.icon" class="md:text-2xl" />
            </div>
          </div>
        </div>
        <h2 class="font-medium md:text-lg">About the project</h2>
        <p class="text-xs md:text-sm">
          {{ data.description }}
        </p>
      </div>
      <div class="space-y-1 md:space-y-2">
        <Button
          :as="data.githubLink ? 'a' : 'button'"
          :href="data.githubLink"
          target="_blank"
          rel="noopener"
          icon="pi pi-github"
          label="Github"
          fluid
          outlined
          :disabled="!data.githubLink"
        />
        <Button
          :as="data.demoLink ? 'a' : 'button'"
          :href="data.demoLink"
          target="_blank"
          rel="noopener"
          icon="pi pi-external-link"
          label="Demo"
          fluid
          outlined
          :disabled="!data.demoLink"
        />
      </div>
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
