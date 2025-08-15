<template>
  <div id="contactSection" class="pt-12 pb-24 bg-indigo-800 mt-24">
    <div
      class="flex flex-col justify-center items-center gap-2 container mx-auto md:max-w-[920px] px-4"
    >
      <h2
        v-animateonscroll="{
          enterClass:
            'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-1000',
        }"
        class="font-bold text-white text-xl md:text-3xl"
      >
        GET IN TOUCH
      </h2>
      <p
        v-animateonscroll="{
          enterClass:
            'animate-enter fade-in-10 zoom-in-60 animate-duration-1500',
        }"
        class="text-sm md:text-[16px] text-indigo-100 text-center"
      >
        I am passionate about delivering high-quality solutions and am keen to
        collaborate on exciting projects. Feel free to reach out to discuss
        potential opportunities.
      </p>
    </div>
  </div>

  <div
    v-animateonscroll="{
      enterClass:
        'animate-enter fade-in slide-in-from-b-10 animate-duration-1000',
    }"
    class="container mx-auto md:max-w-[920px] px-4 -mt-12"
  >
    <div
      class="rounded-xl overflow-hidden shadow flex flex-col md:flex-row bg-white"
    >
      <div class="bg-indigo-900 p-6 space-y-4">
        <h3 class="text-white font-semibold md:text-lg">Contact Information</h3>
        <div class="space-y-2 text-sm">
          <div class="flex items-center text-white gap-2">
            <div
              class="w-8 h-8 flex items-center justify-center bg-indigo-200/6 rounded"
            >
              <Icon
                name="material-symbols:call"
                size="18"
                class="!md:text-2xl"
              />
            </div>
            <span>+63 9477672732</span>
          </div>
          <div class="flex items-center text-white gap-2">
            <div
              class="w-8 h-8 flex items-center justify-center bg-indigo-200/6 rounded"
            >
              <Icon
                name="material-symbols:mail"
                size="18"
                class="!md:text-2xl"
              />
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
      <div v-if="!result" class="p-6 flex flex-col gap-2 w-full">
        <h3 class="font-medium text-gray-500">Fill out the details</h3>
        <IftaLabel variant="in" class="mt-4">
          <InputText
            id="your_name"
            v-model="contact.name"
            :invalid="!!errorState?.name"
            variant="filled"
            fluid
            size="small"
          />
          <label for="your_name" class="!font-normal text-sm">Your name</label>
        </IftaLabel>
        <div class="flex flex-col gap-2 md:flex-row">
          <IftaLabel variant="in" class="w-full">
            <InputText
              id="email"
              v-model="contact.email"
              :invalid="!!errorState?.email"
              variant="filled"
              fluid
              size="small"
            />
            <label for="email" class="!font-normal text-sm">Your email</label>
          </IftaLabel>
          <IftaLabel variant="in" class="w-full">
            <InputText
              id="phone"
              v-model="contact.phone"
              :invalid="!!errorState?.phone"
              variant="filled"
              fluid
              size="small"
            />
            <label for="phone" class="!font-normal text-sm">Your phone</label>
          </IftaLabel>
        </div>
        <IftaLabel variant="in">
          <Textarea
            id="message"
            v-model="contact.message"
            :invalid="!!errorState?.message"
            variant="filled"
            fluid
            size="small"
          />
          <label for="message" class="!font-normal text-sm"
            >Leave a message</label
          >
        </IftaLabel>
        <Button label="Send" icon="pi pi-send" @click="onSubmit" />
      </div>
      <div
        v-else
        class="flex justify-center items-center p-6 w-full animate-ease-in"
      >
        <div class="flex flex-col justify-center gap-4">
          <div class="flex flex-col gap-2 justify-center items-center">
            <Icon
              v-if="result.success"
              name="material-symbols:check-circle-rounded"
              class="text-green-600"
              size="52"
            />
            <Icon
              v-else
              name="gridicons:cross-circle"
              class="text-red-600"
              size="52"
            />
            <span class="text-center text-gray-400">{{ result.message }}</span>
          </div>
          <Button label="Close" severity="secondary" @click="result = null" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Contact } from "@libs/remult/models";
import { remult, type ErrorInfo } from "remult";
type TResult = {
  success: boolean;
  message: string;
};
const result = ref<TResult | null>(null);
const errorState = ref<ErrorInfo<Contact>["modelState"] | null>({});
const contact = ref<Contact>({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const onSubmit = async () => {
  const validate = await remult.repo(Contact).validate(contact.value);
  errorState.value = null;
  if (validate?.modelState) {
    errorState.value = validate.modelState;
    return;
  }

  try {
    await remult.repo(Contact).insert(contact.value);
    contact.value = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    result.value = {
      success: true,
      message: "Thank you for your interest! I will get back to you soon.",
    };
  } catch (error) {
    result.value = {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
};
</script>

<style></style>
