<template>
  <main>
    <BgParticle>
      <SectionIntroduction />
      <SectionEducation />
      <SectionSkills />
      <SectionExperience />
      <SectionProjects />
      <SectionContact />
      <IndexFooter />
    </BgParticle>
    <ScrollTop />
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Florenz De Jesus",
});
</script>

<style>
h1,
h2 {
  font-family: "Rowdies";
}
</style>
