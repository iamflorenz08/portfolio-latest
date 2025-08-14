<template>
  <div class="relative" :class="props.class">
    <div
      class="relative h-full overflow-hidden rounded-xl w-full shadow-md shadow-indigo-400 z-10"
    >
      <NuxtImg src="/img/graduation_pledge.jpg" class="absolute -top-20 md:top-0 w-full" />
    </div>
    <div class="rounded-xl w-full h-full absolute top-4 bg-indigo-200"></div>
    <div class="rounded-xl w-full h-full absolute top-3 bg-indigo-300"></div>
    <div class="rounded-xl w-full h-full absolute top-2 bg-indigo-400"></div>
    <div class="rounded-xl w-full h-full absolute top-1 bg-indigo-500"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    class?: string;
}>()
</script>

<style></style>
