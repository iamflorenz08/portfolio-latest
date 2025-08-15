<template>
  <div class="py-12 flex flex-col justify-center items-center text-gray-400">
    <div>© 2025 - Florenz De Jesus</div>
    <div>
      <Button
        v-for="link in socialMediaLinks"
        :key="link.label"
        :icon="link.icon"
        variant="text"
        as="a"
        :href="link.href"
        target="_blank"
        rel="noopener"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
