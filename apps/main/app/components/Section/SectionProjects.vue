<template>
  <div
    id="projectsSection"
    class="pb-6 px-4 space-y-8 container mx-auto md:max-w-[920px] mt-24"
  >
    <div class="flex items-center gap-2">
      <Icon
        name="material-symbols:code-blocks-outline"
        class="text-indigo-400 text-2xl md:text-3xl"
      />
      <h2
        v-animateonscroll="{
          enterClass:
            'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000',
        }"
        class="text-2xl md:text-3xl"
      >
        Projects
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <Card
        v-for="project in projects"
        :key="project.title"
        v-animateonscroll="{
          enterClass:
            'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-1000',
        }"
        class="overflow-hidden border border-gray-200 group shadow-indigo-500 hover:!shadow-lg duration-300"
        @click="openProjectDialog(project)"
      >
        <template #header>
          <div
            class="w-full h-48 bg-white shadow relative"
            :class="project.class"
          >
            <NuxtImg
              :src="project.cover"
              class="w-full h-full scale-50 group-hover:scale-60 duration-300"
              :class="project.imgClass"
            />
          </div>
        </template>
        <template #content>
          <div class="space-y-2">
            <div class="flex flex-col gap-2">
              <span class="font-medium text-indigo-500 md:text-lg">{{
                project.title
              }}</span>
              <div class="flex gap-2">
                <div
                  v-for="techStack in project.techStack"
                  :key="techStack.label"
                >
                  <Icon :name="techStack.icon" class="md:text-xl" />
                </div>
              </div>
            </div>
            <p class="text-xs md:text-[16px] line-clamp-4 xl:line-clamp-2">
              {{ project.description }}
            </p>
          </div>
        </template>
        <template #footer>
          <Button label="See more" fluid class="mt-2" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TProject } from "@libs/types";
import { projects } from "~/utils/data";
import DialogProject from "../Dialog/DialogProject.vue";
const dialog = useDialog();

const openProjectDialog = (project: TProject) => {
  dialog.open(DialogProject, {
    data: project,
    props: {
      modal: true,
      dismissableMask: true,
      draggable: false,
      closable: false,
      showHeader: false,
      pt: {
        root: "overflow-hidden w-full mx-4 md:max-w-[646px]",
        content: "!p-0",
        footer: "!p-0",
      },
    },
  });
};
</script>

<style></style>
