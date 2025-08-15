<template>
  <div
    id="educationSection"
    class="py-6 px-6 space-y-4 container mx-auto md:max-w-[920px]"
  >
    <div class="flex items-center gap-2">
      <Icon
        name="material-symbols:book-4-spark-outline"
        class="text-indigo-400 text-2xl md:text-3xl"
      />
      <h2
        v-animateonscroll="{
          enterClass:
            'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-2000',
        }"
        class="text-2xl md:text-3xl"
      >
        Education
      </h2>
    </div>

    <div class="md:flex md:items-center md:gap-8">
      <div class="flex flex-col gap-4 text-sm">
        <div
          v-animateonscroll="{
            enterClass:
              'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-1000',
          }"
        >
          <h3 class="text-sm md:text-lg font-bold md:font-bold">
            Bachelor of Science in Computer Science Major in Application
            Development
          </h3>
          <p
            class="text-sm md:text-[16px] font-medium text-gray-400 mt-1 md:mt-2"
          >
            University of Makati
          </p>
          <p class="text-xs md:text-sm text-gray-400">S.Y. 2020-2024</p>
        </div>

        <GradPledgePhoto
          v-animateonscroll="{
            enterClass:
              'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-2000',
          }"
          class="h-52 w-full md:hidden"
        />

        <p
          v-animateonscroll="{
            enterClass:
              'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1500',
          }"
          class="mt-2 md:text-[16px]"
        >
          Graduated Magna Cum Laude, recognized for academic excellence. Awarded
          Most Promising Application Developer by the college department for
          outstanding innovation and technical skills.
        </p>
      </div>
      <GradPledgePhoto
        v-animateonscroll="{
          enterClass:
            'animate-enter fade-in-10 slide-in-from-r-20 animate-duration-2000',
        }"
        class="h-96 min-w-xs hidden md:block"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
