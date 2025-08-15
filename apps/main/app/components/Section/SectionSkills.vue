<template>
  <div
    id="skillsSection"
    class="px-6 py-6 container mx-auto md:max-w-[920px] mt-24"
  >
    <div class="flex items-center gap-2">
      <Icon
        name="material-symbols:computer-outline"
        class="text-indigo-400 text-2xl md:text-3xl"
      />
      <h2
        v-animateonscroll="{
          enterClass: `animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1500`,
        }"
        class="text-2xl md:text-3xl"
      >
        Technical <span class="text-indigo-400">Skills</span>
      </h2>
    </div>

    <div
      v-animateonscroll="{
        enterClass:
          'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-1000',
      }"
      class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8"
    >
      <Card
        v-for="skill in skills"
        :key="skill.label"
        class="!shadow-indigo-500 group hover:!shadow-lg duration-300 border border-gray-100 hover:scale-105"
      >
        <template #content>
          <div class="flex flex-col gap-2 justify-center items-center">
            <Icon :name="skill.icon" size="35" />
            <span class="font-medium text-xs md:text-sm">{{
              skill.label
            }}</span>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { skills } from "~/utils/data";
</script>

<style></style>
