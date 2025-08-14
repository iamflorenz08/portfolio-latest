<template>
  <div class="min-h-screen relative">
    <ClientOnly>
      <vue-particles
        class="-z-10 absolute h-full w-full"
        id="tsparticles"
        :options="options"
        @particles-loaded="particlesLoaded"
      />
    </ClientOnly>
    <div class="h-full" :class="props.class">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ISourceOptions, Container } from "@tsparticles/engine";
const props = defineProps<{
  class?: string;
}>();
const options: ISourceOptions = {
  smooth: true,
  fullScreen: false,
  particles: {
    links: {
      enable: true,
      color: "#eef2ff",
    },
    move: {
      enable: true,
    },
    number: {
      value: 300,
    },
    color: {
      value: "#e0e7ff",
    },
  },
};

const particlesLoaded = (container?: Container) => {};
</script>

<style></style>
