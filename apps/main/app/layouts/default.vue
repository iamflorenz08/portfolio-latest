<template>
  <nav class="fixed top-0 z-50 flex justify-center w-full py-4 px-4">
    <div
      class="px-2 py-1 rounded-full flex justify-between items-center w-full max-w-[920px] shadow border border-gray-100 bg-white"
    >
      <div class="relative w-12"><NuxtImg src="/logo.png" /></div>
      <div>
        <Button
          v-if="selectedNav"
          @click="navPopOver?.toggle($event)"
          size="small"
          variant="text"
        >
          <template #default>
            <div class="flex gap-2 items-center">
              <div class="flex gap-2 items-center">
                <Icon :name="selectedNav.icon" size="18" />
                <div class="font-bold line-clamp-1">
                  {{ selectedNav.shortLabel ?? selectedNav.label }}
                </div>
              </div>
              <Icon name="cuida:caret-down-outline" size="18" />
            </div>
          </template>
        </Button>
        <Popover ref="navPopOver">
          <div class="flex flex-col gap-1">
            <Button
              v-for="nav in navs"
              :key="nav.label"
              @click="
                selectedNav = nav;
                navPopOver?.toggle($event);
              "
              variant="text"
            >
              <template #default>
                <div class="flex gap-2 items-center">
                  <Icon v-if="nav.icon" :name="nav.icon" />
                  <span>{{ nav.label }}</span>
                </div>
              </template>
            </Button>
          </div>
        </Popover>
      </div>
      <div class="flex gap-2">
        <!-- <Button
          v-for="nav in navs"
          :label="nav.label"
          variant="link"
          :pt="{ label: 'text-xs', root: '!px-0' }"
        /> -->

        <Button label="Get In Touch" :pt="{ root: '!rounded-full' }" size="small" />
      </div>
    </div>
  </nav>
  <slot />
</template>

<script lang="ts" setup>
import type { PopoverMethods } from "primevue/popover";

const navs = [
  {
    label: "Introduction",
    icon: "material-symbols:person-raised-hand-outline",
  },
  {
    label: "Education",
    icon: "material-symbols:book-4-spark-outline",
  },
  {
    label: "Technical Skills",
    shortLabel: "Skills",
    icon: "material-symbols:computer-outline",
  },
  {
    label: "Professional Experience",
    shortLabel: "Experience",
    icon: "material-symbols:home-work-outline",
  },
  {
    label: "Projects",
    icon: "material-symbols:code-blocks-outline",
  },
  {
    label: "Contact",
    icon: "material-symbols:call-outline",
  },
];
const navPopOver = ref<PopoverMethods>();
const selectedNav = ref<typeof navs[number]>(navs[0]!);
</script>

<style></style>
