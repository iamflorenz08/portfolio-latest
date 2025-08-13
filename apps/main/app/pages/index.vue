<template>
  <main>
    <BgParticle>
      <div class="container mx-auto px-6 h-full">
        <div class="flex flex-col justify-center items-center h-full gap-6">
          <div class="relative mt-12">
            <div class="rounded-full overflow-hidden relative w-48 h-48 z-50">
              <NuxtImg
                class="absolute left-0"
                src="/img/profile_1.jpg"
                alt="Profile"
              />
            </div>
            <div
              class="rounded-full w-48 h-48 absolute top-0 left-4 bg-indigo-200"
            ></div>
            <div
              class="rounded-full w-48 h-48 absolute top-0 left-3 bg-indigo-300"
            ></div>
            <div
              class="rounded-full w-48 h-48 absolute top-0 left-2 bg-indigo-400"
            ></div>
            <div
              class="rounded-full w-48 h-48 absolute top-0 left-1 bg-indigo-500"
            ></div>
          </div>

          <div class="text-center space-y-2 mt-4">
            <h2 class="text-primary text-xl">Hi, I am Florenz!</h2>
            <h1 class="text-3xl font-bold text-indigo-500">
              SOFTWARE DEVELOPER
            </h1>
            <p class="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              provident autem nesciunt accusantium porro? Quasi, esse. Error,
              ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos
              ducimus non mollitia molestias praesentium?
            </p>
          </div>
          <div class="flex gap-2">
            <Button size="small" label="See More" icon="pi pi-eye" />
            <Button
              size="small"
              label="Download CV"
              variant="outlined"
              icon="pi pi-download"
            />
          </div>
          <div>
            <Button
              v-for="link in socialMediaLinks"
              :key="link.label"
              :icon="link.icon"
              variant="text"
            />
          </div>
        </div>
      </div>
    </BgParticle>
    <div class="px-4 pt-8 pb-16">
      <h2 class="text-2xl">My <span class="text-indigo-400">Skills</span></h2>
      <div class="grid grid-cols-3 gap-4 mt-8">
        <Card
          v-for="skill in skills"
          :key="skill.label"
          class="!shadow-indigo-200 !shadow"
        >
          <template #content>
            <div class="flex flex-col gap-2 justify-center items-center">
              <Icon :name="skill.icon" size="35" />
              <span class="font-medium text-xs">{{ skill.label }}</span>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <div class="py-6 space-y-8">
      <h2 class="text-2xl px-4">
        Professional <span class="text-indigo-400">Experience</span>
      </h2>
      <div>
        <Timeline
          :value="events"
          align="left"
          class="w-full"
          :pt="{ eventOpposite: '!flex-0 !pl-0' }"
        >
          <template #content="slotProps">
            <Card class="my-4">
              <template #content>
                <span
                  class="text-sm font-medium text-indigo-500 line-clamp-1"
                  >{{ slotProps.item.company }}</span
                >
                <span class="text-xs line-clamp-1">{{
                  slotProps.item.position
                }}</span>
                <p class="text-xs mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veniam consequuntur molestiae quidem cupiditate accusamus
                  corporis repudiandae distinctio quod officia, molestias
                  consequatur deleniti dicta a recusandae quam voluptatibus
                  beatae laudantium soluta.
                </p>
              </template>
            </Card>
          </template>

          <template #opposite>
            <div class="w-20">
              <span class="text-xs text-gray-400 line-clamp-1">June 2025</span>
            </div>
          </template>
        </Timeline>
      </div>
    </div>

    <div class="py-6 px-4 space-y-8">
      <h2 class="text-2xl">Projects</h2>
      <div class="grid grid-cols-1 gap-4">
        <Card
          v-for="project in projects"
          :key="project.title"
          @click="openProjectDialog(project)"
          class="overflow-hidden"
        >
          <template #header>
            <div
              class="w-full h-48 bg-white shadow relative"
              :class="project.class"
            >
              <NuxtImg
                :src="project.cover"
                class="w-full h-full scale-50"
                :class="project.imgClass"
              />
            </div>
          </template>
          <template #content>
            <div class="space-y-2">
              <div class="flex flex-col gap-2">
                <span class="font-medium text-indigo-500">{{
                  project.title
                }}</span>
                <div class="flex gap-2">
                  <div
                    v-for="techStack in project.techStack"
                    :key="techStack.label"
                  >
                    <Icon :name="techStack.icon" />
                  </div>
                </div>
              </div>
              <p class="text-xs line-clamp-4">
                {{ project.description }}
              </p>
            </div>
          </template>
          <template #footer>
            <Button label="See more" fluid size="small" />
          </template>
        </Card>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { type TProject } from "@libs/types";
import DialogProject from "~/components/Dialog/DialogProject.vue";
const socialMediaLinks = [
  {
    label: "Linked In",
    icon: "pi pi-linkedin",
  },
  {
    label: "Github",
    icon: "pi pi-github",
  },
  {
    label: "Instagram",
    icon: "pi pi-instagram",
  },
];

const skills = [
  {
    label: "Node JS",
    icon: "devicon:nodejs",
  },
  {
    label: "Fastify",
    icon: "devicon:fastify",
  },
  {
    label: "Express",
    icon: "devicon:express",
  },
  {
    label: "AWS",
    icon: "devicon:amazonwebservices-wordmark",
  },
  {
    label: "MySQL",
    icon: "devicon:mysql-wordmark",
  },
  {
    label: "PostgreSQL",
    icon: "devicon:postgresql",
  },
  {
    label: "MongoDB",
    icon: "devicon:mongodb",
  },
  {
    label: "Vue",
    icon: "devicon:vuejs",
  },
  {
    label: "Nuxt",
    icon: "devicon:nuxtjs",
  },
  {
    label: "React",
    icon: "devicon:react",
  },
  {
    label: "Next",
    icon: "devicon:nextjs",
  },

  {
    label: "Typescript",
    icon: "devicon:typescript",
  },
  {
    label: "Javascript",
    icon: "devicon:javascript",
  },
];

const events = ref([
  {
    company: "Jeremiah 2911 Corporation",
    position: "Mid Software Developer",
  },
  {
    company: "My Dream Visa LLC",
    position: "Software Engineer",
  },
  {
    company: "Lucky Savers",
    position: "Freelance Web Developer",
  },
]);

const projects = [
  {
    title: "J2911 Internal System",
    cover: "/img/fcph_logo.png",
    imgClass: "object-contain",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium?",
    techStack: [
      {
        label: "Vue",
        icon: "devicon:vuejs",
      },
      {
        label: "Nuxt",
        icon: "devicon:nuxtjs",
      },
      {
        label: "Node JS",
        icon: "devicon:nodejs",
      },
      {
        label: "Fastify",
        icon: "devicon:fastify",
      },
      {
        label: "MySQL",
        icon: "devicon:mysql",
      },
      {
        label: "AWS",
        icon: "devicon:amazonwebservices-wordmark",
      },
    ],
    gallery: [
      {
        src: "/img/fcph_logo.png",
        alt: "Cover",
        imgClass: "scale-50 object-contain",
      },
      {
        src: "/gallery/j2911/slide_1.png",
        alt: "Slide 1",
      },
    ],
  },
  {
    title: "My Dream Visa",
    cover: "/img/mdv_logo.png",
    imgClass: "object-contain",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium?",
    techStack: [
      {
        label: "Vue",
        icon: "devicon:vuejs",
      },
      {
        label: "Quasar",
        icon: "devicon:quasar",
      },
      {
        label: "Nuxt",
        icon: "devicon:nuxtjs",
      },
      {
        label: "Node JS",
        icon: "devicon:nodejs",
      },
      {
        label: "Express",
        icon: "devicon:express",
      },
      {
        label: "MySQL",
        icon: "devicon:mysql",
      },
    ],
    gallery: [
      {
        src: "/img/mdv_logo.png",
        alt: "Cover",
        imgClass: "scale-50 object-contain",
      },
      {
        src: "/gallery/mdv/slide_1.png",
        alt: "Slide 1",
      },
      {
        src: "/gallery/mdv/slide_2.png",
        alt: "Slide 2",
      },
      {
        src: "/gallery/mdv/slide_3.png",
        alt: "Slide 3",
      },
    ],
  },
  {
    title: "EroHub",
    cover: "/img/erohub_logo.png",
    imgClass: "object-cover",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium?",
    techStack: [
      {
        label: "React",
        icon: "devicon:react",
      },
      {
        label: "Next",
        icon: "devicon:nextjs",
      },
      {
        label: "Node JS",
        icon: "devicon:nodejs",
      },
      {
        label: "Fastify",
        icon: "devicon:fastify",
      },
      {
        label: "MongoDB",
        icon: "devicon:mongodb",
      },
    ],
    gallery: [
      {
        src: "/img/erohub_logo.png",
        alt: "Cover",
        imgClass: "scale-50 object-contain",
      },
      {
        src: "/gallery/erohub/slide_1.png",
        alt: "Slide 1",
      },
      {
        src: "/gallery/erohub/slide_2.png",
        alt: "Slide 2",
      },
      {
        src: "/gallery/erohub/slide_3.png",
        alt: "Slide 3",
      },
      {
        src: "/gallery/erohub/slide_4.png",
        alt: "Slide 4",
      },
      {
        src: "/gallery/erohub/slide_5.png",
        alt: "Slide 5",
      },
      {
        src: "/gallery/erohub/slide_6.png",
        alt: "Slide 6",
      },
    ],
  },
  {
    title: "Lucky Savers",
    cover: "/img/luckysavers_logo.png",
    class: "!bg-green-600",
    imgClass: "object-contain",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium?",
    techStack: [
      {
        label: "React",
        icon: "devicon:react",
      },
      {
        label: "Next",
        icon: "devicon:nextjs",
      },
      {
        label: "Node JS",
        icon: "devicon:nodejs",
      },
      {
        label: "Fastify",
        icon: "devicon:fastify",
      },
      {
        label: "MongoDB",
        icon: "devicon:mongodb",
      },
      {
        label: "AWS",
        icon: "devicon:amazonwebservices-wordmark",
      },
    ],
    gallery: [
      {
        src: "/img/luckysavers_logo.png",
        alt: "Cover",
        imgClass: "scale-50 object-contain bg-green-600 p-4",
      },
      {
        src: "/gallery/luckysavers/slide_1.png",
        alt: "Slide 1",
      },
      {
        src: "/gallery/luckysavers/slide_2.png",
        alt: "Slide 2",
      },
      {
        src: "/gallery/luckysavers/slide_3.png",
        alt: "Slide 3",
      },
      {
        src: "/gallery/luckysavers/slide_4.png",
        alt: "Slide 4",
      },
      {
        src: "/gallery/luckysavers/slide_5.png",
        alt: "Slide 5",
      },
    ],
  },
  {
    title: "VMeme",
    cover: "/img/vmeme_logo.webp",
    imgClass: "object-contain",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium?",
    techStack: [
      {
        label: "React",
        icon: "devicon:react",
      },
      {
        label: "Next",
        icon: "devicon:nextjs",
      },
      {
        label: "Node JS",
        icon: "devicon:nodejs",
      },
      {
        label: "Fastify",
        icon: "devicon:fastify",
      },
      {
        label: "MongoDB",
        icon: "devicon:mongodb",
      },
      {
        label: "Vercel",
        icon: "devicon:vercel",
      },
    ],
    gallery: [
      {
        src: "/img/vmeme_logo.webp",
        alt: "Cover",
        imgClass: "scale-50 object-contain",
      },
      {
        src: "/gallery/vmeme/slide_1.png",
        alt: "Slide 1",
      },
      {
        src: "/gallery/vmeme/slide_2.png",
        alt: "Slide 2",
      },
      {
        src: "/gallery/vmeme/slide_3.png",
        alt: "Slide 3",
      },
      {
        src: "/gallery/vmeme/slide_4.png",
        alt: "Slide 4",
      },
    ],
  },
  {
    title: "Community Crave",
    cover: "/img/cc_logo.png",
    imgClass: "object-contain",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse. Error, ducimus id. Ratione, alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias praesentium?",
    techStack: [
      {
        label: "React",
        icon: "devicon:react",
      },
      {
        label: "Next",
        icon: "devicon:nextjs",
      },
      {
        label: "Node JS",
        icon: "devicon:nodejs",
      },
      {
        label: "Fastify",
        icon: "devicon:fastify",
      },
      {
        label: "MongoDB",
        icon: "devicon:mongodb",
      },
      {
        label: "Vercel",
        icon: "devicon:vercel",
      },
    ],
    gallery: [
      {
        src: "/img/cc_logo.png",
        alt: "Cover",
        imgClass: "scale-50 object-contain",
      },
      {
        src: "/gallery/cc/slide_1.png",
        alt: "Slide 1",
      },
      {
        src: "/gallery/cc/slide_2.png",
        alt: "Slide 2",
      },
      {
        src: "/gallery/cc/slide_3.png",
        alt: "Slide 3",
      },
    ],
  },
];

const dialog = useDialog();

const openProjectDialog = (project: TProject) => {
  dialog.open(DialogProject, {
    data: project,
    props: {
      modal: true,
      dismissableMask: true,
      draggable: false,
      closable: false,
      showHeader: false,
      pt: {
        root: "overflow-hidden w-full mx-4",
        content: "!p-0",
        footer: "!p-0",
      },
    },
  });
};
</script>

<style scoped>
h1,
h2 {
  font-family: "Lilita One";
}
</style>
