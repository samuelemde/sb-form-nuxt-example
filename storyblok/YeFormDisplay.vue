<script setup lang="ts">
import type { StoryblokStory } from "storyblok-generate-ts";
import { type Email, YeForm, type YeFormConfig } from "@yoe-form/nuxt";
import { ref } from "vue";

type YeFormDisplay = {
  _uuid: string;
  form: string;
  component: "YeFormDisplay";
};

type YeFormBlok = {
  _uid: string;
  component: "YeForm";
  yeForm: YeFormConfig;
};

export interface YeFormProps {
  blok: YeFormDisplay;
}
const { blok } = defineProps<YeFormProps>();

const { locale } = useI18n();

const language = ref<string>(locale.value);
const config = ref<YeFormConfig | null>(null);
const storyblokApi = useStoryblokApi();

// fetch the actual form config
const { data } = (await storyblokApi.get(`cdn/stories/${blok.form}`, {
  version: "draft",
  find_by: "uuid",
})) as { data: { story: StoryblokStory<YeFormBlok> } };

config.value = data.story.content.yeForm;
const handleEmail = async (
  values: any,
  internalEmail: Email,
  confirmationEmail?: Email,
) => {
  alert(JSON.stringify(values));
};

const handleRestCall = async (url: string, values: any) => {
  alert(JSON.stringify({ url, ...values }));
};
</script>

<template>
  <div class="flex justify-center w-full">
    <div class="flex flex-col items-center justify-center w-1/2 gap-10">
      <YeForm
        :config="config"
        :emailHandler="handleEmail"
        :language="language"
        class="w-full ye-button:bg-green-600"
      />
    </div>
  </div>
</template>
