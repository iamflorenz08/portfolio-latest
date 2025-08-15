<template>
  <div
    id="experienceSection"
    class="py-6 space-y-8 container mx-auto md:max-w-[920px] mt-24"
  >
    <div class="flex items-center gap-2 px-6">
      <Icon
        name="material-symbols:home-work-outline"
        class="text-indigo-400 text-2xl md:text-3xl"
      />
      <h2
        v-animateonscroll="{
          enterClass: `animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000`,
        }"
        class="text-2xl md:text-3xl"
      >
        Professional <span class="text-indigo-400">Experience</span>
      </h2>
    </div>

    <div class="md:hidden px-2">
      <Timeline
        :value="events"
        align="left"
        class="w-full"
        :pt="{ eventOpposite: '!flex-0 !pl-0' }"
      >
        <template #content="slotProps">
          <Card
            v-animateonscroll="{ enterClass: slotProps.item.animateMobile }"
            class="my-4"
          >
            <template #content>
              <span class="text-sm font-medium text-indigo-500 line-clamp-1">{{
                slotProps.item.company
              }}</span>
              <span class="text-xs line-clamp-1 text-gray-400">{{
                slotProps.item.position
              }}</span>
              <p class="text-xs mt-2">
                {{ slotProps.item.description }}
              </p>
            </template>
          </Card>
        </template>

        <template #opposite="slotProps">
          <div class="w-20">
            <span class="text-xs text-gray-400 line-clamp-1">{{
              slotProps.item.startDate
            }}</span>
          </div>
        </template>
      </Timeline>
    </div>

    <div class="hidden md:block px-2">
      <Timeline :value="events" align="alternate" class="w-full">
        <template #content="slotProps">
          <Card v-animateonscroll="{ enterClass: slotProps.item.animate }" class="my-4">
            <template #content>
              <span
                class="text-sm md:text-[16px] font-medium text-indigo-500 line-clamp-1"
                >{{ slotProps.item.company }}</span
              >
              <span class="text-xs md:text-sm line-clamp-1 text-gray-400">{{
                slotProps.item.position
              }}</span>
              <p class="text-xs md:text-sm mt-2">
                {{ slotProps.item.description }}
              </p>
            </template>
          </Card>
        </template>

        <template #opposite="slotProps">
          <div>
            <span class="text-xs md:text-sm text-gray-400">{{ slotProps.item.startDate }}</span>
          </div>
        </template>
      </Timeline>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { events } from "~/utils/data";
</script>

<style></style>
