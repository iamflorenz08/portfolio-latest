<template>
  <nav class="absolute flex justify-center w-full py-4 px-4">
    <div class="px-4 py-1 rounded-full flex justify-between items-center w-full max-w-[856px] shadow border border-gray-100 bg-white">
      <div>
        <div class="bg-indigo-600 w-6 h-6 rounded-full"></div>
      </div>
      <div class="flex gap-2">  
        <Button
          v-for="nav in navs"
          :label="nav.label"
          variant="link"
          :pt="{ label: 'text-xs', root: '!px-0' }"
        />
      </div>
    </div>
  </nav>
  <slot />
</template>

<script lang="ts" setup>
const navs = [
  {
    label: "Home",
  },
  {
    label: "About me",
  },
  {
    label: "Experience",
  },
  {
    label: "Projects",
  },
];
</script>

<style></style>
