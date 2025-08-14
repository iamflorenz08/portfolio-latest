<template>
  <main>
    <BgParticle>
      <div class="container mx-auto px-6 h-screen md:max-w-[920px]">
        <div
          class="flex flex-col md:flex-row justify-center items-center h-full gap-6 md:gap-16"
        >
          <div
            class="relative mt-12 md:mt-0 min-w-48 h-48 md:min-w-60 md:h-60 rounded-full"
          >
            <div class="overflow-hidden relative w-full h-full z-10 rounded-full">
              <NuxtImg
                class="absolute left-0 w-full"
                src="/img/profile_1.jpg"
                alt="Profile"
              />
            </div>
            <div
              class="w-full h-full rounded-full absolute top-0 left-4 bg-indigo-200"
            ></div>
            <div
              class="w-full h-full rounded-full absolute top-0 left-3 bg-indigo-300"
            ></div>
            <div
              class="w-full h-full rounded-full absolute top-0 left-2 bg-indigo-400"
            ></div>
            <div
              class="w-full h-full rounded-full absolute top-0 left-1 bg-indigo-500"
            ></div>
          </div>

          <div class="flex flex-col gap-6 justify-center items-center md:items-start">
            <div class="text-center md:text-left space-y-2 mt-4">
              <h2 class="text-primary text-xl md:text-2xl">Hi, I am Florenz!</h2>
              <h1 class="text-3xl md:text-4xl font-bold text-indigo-500">
                SOFTWARE DEVELOPER
              </h1>
              <p class="text-sm md:text-[16px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident
                autem nesciunt accusantium porro? Quasi, esse. Error, ducimus id. Ratione,
                alias! Tempora, et! Quidem dignissimos ducimus non mollitia molestias
                praesentium?
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
                :pt="{ icon: 'md:!text-xl' }"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="py-6 bg-indigo-800 text-white -mt-6">
        <div class="flex px-8 justify-between container mx-auto md:max-w-[920px]">
          <div v-for="value in Array(3)" class="flex flex-col items-center">
            <h1 class="text-3xl">0</h1>
            <div class="flex items-center justify-center gap-1 italic">
              <span class="text-sm">Visits</span>
              <Icon name="mdi:information-variant-circle-outline" size="18" />
            </div>
          </div>
        </div>
      </div>
      <div class="py-6 px-6 space-y-4 container mx-auto md:max-w-[920px] mt-24">
        <div class="flex items-center gap-2">
          <Icon
            name="material-symbols:book-4-spark-outline"
            class="text-indigo-400 text-2xl md:text-3xl"
          />
          <h2 class="text-2xl md:text-3xl">Education</h2>
        </div>

        <div class="md:flex md:items-center md:gap-8">
          <div class="flex flex-col gap-4 text-sm">
            <div>
              <h3 class="text-sm md:text-lg font-bold md:font-bold">
                Bachelor of Science in Computer Science Major in Application Development
              </h3>
              <p class="text-sm md:text-[16px] font-medium text-gray-400 mt-1 md:mt-2">
                University of Makati
              </p>
              <p class="text-xs md:text-sm text-gray-400">S.Y. 2020-2024</p>
            </div>

            <GradPledgePhoto class="h-52 w-full md:hidden" />

            <p class="mt-2 md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cupiditate,
              quo, iure aliquid provident quae repellendus cum debitis, possimus ratione
              natus vero veniam laborum nam dolores enim error eaque eveniet!
            </p>
          </div>
          <GradPledgePhoto class="h-96 min-w-xs hidden md:block" />
        </div>
      </div>
      <div class="px-6 py-6 container mx-auto md:max-w-[920px] mt-24">
        <div class="flex items-center gap-2">
          <Icon
            name="material-symbols:computer-outline"
            class="text-indigo-400 text-2xl md:text-3xl"
          />
          <h2 class="text-2xl md:text-3xl">
            Technical <span class="text-indigo-400">Skills</span>
          </h2>
        </div>

        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8">
          <Card
            v-for="skill in skills"
            :key="skill.label"
            class="!shadow-indigo-200 !shadow"
          >
            <template #content>
              <div class="flex flex-col gap-2 justify-center items-center">
                <Icon :name="skill.icon" size="35" />
                <span class="font-medium text-xs md:text-sm">{{ skill.label }}</span>
              </div>
            </template>
          </Card>
        </div>
      </div>
      <div class="py-6 space-y-8 container mx-auto md:max-w-[920px] mt-24">
        <div class="flex items-center gap-2 px-6">
          <Icon
            name="material-symbols:home-work-outline"
            class="text-indigo-400 text-2xl md:text-3xl"
          />
          <h2 class="text-2xl md:text-3xl">
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
              <Card class="my-4">
                <template #content>
                  <span class="text-sm font-medium text-indigo-500 line-clamp-1">{{
                    slotProps.item.company
                  }}</span>
                  <span class="text-xs line-clamp-1 text-gray-400">{{
                    slotProps.item.position
                  }}</span>
                  <p class="text-xs mt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                    consequuntur molestiae quidem cupiditate accusamus corporis
                    repudiandae distinctio quod officia, molestias consequatur deleniti
                    dicta a recusandae quam voluptatibus beatae laudantium soluta.
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

        <div class="hidden md:block px-2">
          <Timeline :value="events" align="alternate" class="w-full">
            <template #content="slotProps">
              <Card class="my-4">
                <template #content>
                  <span
                    class="text-sm md:text-[16px] font-medium text-indigo-500 line-clamp-1"
                    >{{ slotProps.item.company }}</span
                  >
                  <span class="text-xs md:text-sm line-clamp-1 text-gray-400">{{
                    slotProps.item.position
                  }}</span>
                  <p class="text-xs md:text-sm mt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                    consequuntur molestiae quidem cupiditate accusamus corporis
                    repudiandae distinctio quod officia, molestias consequatur deleniti
                    dicta a recusandae quam voluptatibus beatae laudantium soluta.
                  </p>
                </template>
              </Card>
            </template>

            <template #opposite>
              <div>
                <span class="text-xs md:text-sm text-gray-400">June 2025</span>
              </div>
            </template>
          </Timeline>
        </div>
      </div>

      <div class="pb-6 px-4 space-y-8 container mx-auto md:max-w-[920px] mt-24">
        <div class="flex items-center gap-2">
          <Icon
            name="material-symbols:code-blocks-outline"
            class="text-indigo-400 text-2xl md:text-3xl"
          />
          <h2 class="text-2xl md:text-3xl">Projects</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Card
            v-for="project in projects"
            :key="project.title"
            @click="openProjectDialog(project)"
            class="overflow-hidden border border-gray-200"
          >
            <template #header>
              <div class="w-full h-48 bg-white shadow relative" :class="project.class">
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
                  <span class="font-medium text-indigo-500 md:text-lg">{{
                    project.title
                  }}</span>
                  <div class="flex gap-2">
                    <div v-for="techStack in project.techStack" :key="techStack.label">
                      <Icon :name="techStack.icon" class="md:text-xl" />
                    </div>
                  </div>
                </div>
                <p class="text-xs md:text-[16px] line-clamp-4 xl:line-clamp-2">
                  {{ project.description }}
                </p>
              </div>
            </template>
            <template #footer>
              <Button label="See more" fluid class="mt-2" />
            </template>
          </Card>
        </div>
      </div>

      <div class="pt-12 pb-24 bg-indigo-800 mt-24">
        <div
          class="flex flex-col justify-center items-center gap-2 container mx-auto md:max-w-[920px] px-4"
        >
          <h2 class="font-bold text-white text-xl md:text-2xl">GET IN TOUCH</h2>
          <p class="text-sm md:text-[16px] text-indigo-100 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates atque
            eligendi soluta, facilis velit neque dignissimos quae alias deserunt mollitia
            omnis corrupti commodi. Pariatur enim aliquam rerum reiciendis a.
          </p>
        </div>
      </div>

      <div class="container mx-auto md:max-w-[920px] px-4 -mt-12">
        <div class="rounded-xl overflow-hidden shadow flex flex-col md:flex-row bg-white">
          <div class="bg-indigo-900 p-6 space-y-4">
            <h3 class="text-white font-semibold md:text-lg">Contact Information</h3>
            <div class="space-y-2 text-sm">
              <div class="flex items-center text-white gap-2">
                <div
                  class="w-8 h-8 flex items-center justify-center bg-indigo-200/6 rounded"
                >
                  <Icon name="material-symbols:call" size="18" class="!md:text-2xl" />
                </div>
                <span>+63 9477672732</span>
              </div>
              <div class="flex items-center text-white gap-2">
                <div
                  class="w-8 h-8 flex items-center justify-center bg-indigo-200/6 rounded"
                >
                  <Icon name="material-symbols:mail" size="18" class="!md:text-2xl" />
                </div>
                <span>dejesusflorenz8@gmail.com</span>
              </div>
              <div class="flex items-center text-white gap-2">
                <div
                  class="w-8 h-8 flex items-center justify-center bg-indigo-200/6 rounded"
                >
                  <Icon
                    name="material-symbols:location-on-rounded"
                    size="18"
                    class="!md:text-2xl"
                  />
                </div>
                <span>Taguig, PH</span>
              </div>
            </div>
          </div>
          <div class="p-6 flex flex-col gap-2 w-full">
            <h3 class="font-medium text-gray-500">Fill out the details</h3>
            <FloatLabel variant="in" class="mt-4">
              <InputText id="your_name" variant="filled" fluid size="small" />
              <label for="your_name" class="!font-normal text-sm">Your name</label>
            </FloatLabel>
            <div class="flex flex-col gap-2 md:flex-row">
              <FloatLabel variant="in">
                <InputText id="email" variant="filled" fluid size="small" />
                <label for="email" class="!font-normal text-sm">Your email</label>
              </FloatLabel>
              <FloatLabel variant="in">
                <InputText id="phone" variant="filled" fluid size="small" />
                <label for="phone" class="!font-normal text-sm">Your phone</label>
              </FloatLabel>
            </div>
            <FloatLabel variant="in">
              <Textarea id="message" variant="filled" fluid size="small" />
              <label for="message" class="!font-normal text-sm">Leave a message</label>
            </FloatLabel>
            <Button label="Send" icon="pi pi-send" />
          </div>
        </div>
      </div>

      <div class="py-12 flex flex-col justify-center items-center text-gray-400">
        <div>© 2025 - Florenz De Jesus</div>
        <div>
          <Button
            v-for="link in socialMediaLinks"
            :key="link.label"
            :icon="link.icon"
            variant="text"
          />
        </div>
      </div>
    </BgParticle>
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
        root: "overflow-hidden w-full mx-4 md:max-w-[646px]",
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
