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
                gotoSection(nav.sectionId);
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

        <Button
          label="Get In Touch"
          :pt="{ root: '!rounded-full' }"
          size="small"
          @click="gotoSection('contactSection')"
        />
      </div>
    </div>
  </nav>
  <slot />
</template>

<script lang="ts" setup>
import { gotoSection } from "~/utils/scroll";
import type { PopoverMethods } from "primevue/popover";

const navs = [
  {
    label: "Introduction",
    icon: "material-symbols:person-raised-hand-outline",
    sectionId: "introductionSection",
  },
  {
    label: "Education",
    icon: "material-symbols:book-4-spark-outline",
    sectionId: "educationSection",
  },
  {
    label: "Technical Skills",
    shortLabel: "Skills",
    icon: "material-symbols:computer-outline",
    sectionId: "skillsSection",
  },
  {
    label: "Professional Experience",
    shortLabel: "Experience",
    icon: "material-symbols:home-work-outline",
    sectionId: "experienceSection",
  },
  {
    label: "Projects",
    icon: "material-symbols:code-blocks-outline",
    sectionId: "projectsSection",
  },
  {
    label: "Contact",
    icon: "material-symbols:call-outline",
    sectionId: "contactSection",
  },
];
const navPopOver = ref<PopoverMethods>();
const selectedNav = ref<typeof navs[number]>(navs[0]!);

onMounted(() => {
  const sections = document.querySelectorAll("[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      const newSectionId = entries.find(
        (entry) =>
          entry.isIntersecting &&
          navs.map((nav) => nav.sectionId).includes(entry.target.id)
      )?.target.id;
      if (!newSectionId) return;
      if (newSectionId !== selectedNav.value.sectionId) {
        selectedNav.value = navs.find((nav) => nav.sectionId === newSectionId)!;
      }
    },
    {
      threshold: 0.5,
      rootMargin: "0px 0px -45% 0px",
    }
  );
  sections.forEach((section) => observer.observe(section));
});
</script>

<style></style>
