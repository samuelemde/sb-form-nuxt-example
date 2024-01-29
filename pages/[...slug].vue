<script setup>
const { slug } = useRoute().params;

const { locale } = useI18n();

const url = slug && slug.length > 0 ? slug.join("/") : "home";
const story = await useAsyncStoryblok(url.replace(/\/$/, ""), {
  version: "draft",
  language: locale.value,
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
