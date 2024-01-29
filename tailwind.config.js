import { yeFormTW } from "@yoe-form/nuxt";

/** @type {import('tailwindcss').Config} */
export default yeFormTW({
  content: [
    "storyblok/**/*.{vue,js}",
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
