import { defineStore } from "pinia";
import { ref } from "vue";

export const useSystemStore = defineStore(
  "system",
  () => {
    const language = ref("en");
    const isDark = ref(false);

    const setLanguage = (lang: string) => {
      language.value = lang;
    };

    const setDark = (dark: boolean) => {
      isDark.value = dark;
    };

    return {
      language,
      isDark,
      setLanguage,
      setDark,
    };
  },
  {
    persist: true,
  }
);
