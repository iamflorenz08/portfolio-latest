<template>
  <div id="introductionSection" class="container mx-auto px-6 h-screen md:max-w-[920px]">
    <div
      class="flex flex-col md:flex-row justify-center items-center h-full gap-6 md:gap-16"
    >
      <div
        v-animateonscroll="{
          enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-1000',
        }"
        class="relative mt-12 md:mt-0 min-w-48 h-48 md:min-w-60 md:h-60 rounded-full"
      >
        <div class="overflow-hidden relative w-full h-full z-10 rounded-full">
          <NuxtImg
            class="absolute left-0 w-full hover:scale-110 duration-300"
            src="/img/profile_1.jpg"
            alt="Profile"
          />
        </div>
        <div class="w-full h-full rounded-full absolute top-0 left-4 bg-indigo-200" />
        <div class="w-full h-full rounded-full absolute top-0 left-3 bg-indigo-300" />
        <div class="w-full h-full rounded-full absolute top-0 left-2 bg-indigo-400" />
        <div class="w-full h-full rounded-full absolute top-0 left-1 bg-indigo-500" />
      </div>

      <div class="flex flex-col gap-6 justify-center items-center md:items-start">
        <div class="text-center md:text-left space-y-2 mt-4">
          <h2
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000',
            }"
            class="text-xl md:text-2xl animate-fadein"
          >
            Hi, I am Florenz!
          </h2>
          <h1
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000',
            }"
            class="text-3xl md:text-4xl font-bold text-indigo-500"
          >
            SOFTWARE DEVELOPER
          </h1>
          <p
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000',
            }"
            class="text-sm md:text-[16px] text-gray-500"
          >
            {{ description }}
          </p>
        </div>
        <div class="flex gap-2">
          <Button
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 slide-in-from-r-20 animate-duration-1000',
            }"
            size="small"
            label="See More"
            icon="pi pi-eye"
            @click="gotoSection('educationSection')"
          />
          <Button
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 slide-in-from-r-20 animate-duration-1500',
            }"
            size="small"
            label="Download CV"
            variant="outlined"
            icon="pi pi-download"
            as="a"
            href="/api/downloads/resume"
            target="_blank"
            rel="noopener"
          />
        </div>
        <div
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-20 animate-duration-2000',
          }"
          class="space-x-2"
        >
          <Button
            v-for="link in socialMediaLinks"
            as="a"
            :href="link.href"
            target="_blank"
            rel="noopener"
            :key="link.label"
            class="hover:scale-110"
            :icon="link.icon"
            variant="text"
            :pt="{ icon: 'md:!text-xl' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { socialMediaLinks } from "~/utils/data";
const description =
  "With 3+ years of experience, including over a year in a professional setting. Successfully engineered and deployed end-to-end software solutions — from initial concept and architecture design to production launch — delivering high-performance applications that meet business goals.";

useSeoMeta({
  description: description,
  ogTitle: "Florenz De Jesus",
  ogDescription: description,
  ogType: "profile",
  ogUrl: "https://florenzdejesus.space",
  ogImage: "/img/profile_1.jpg",
});
</script>

<style></style>
