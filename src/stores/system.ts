import { defineStore } from "pinia";
import { ref } from "vue";

export const useSystemStore = defineStore(
  "system",
  () => {
    const language = ref("znCN");
    const isDark = ref(false);

    const setLanguage = (lang: string) => {
      language.value = lang;
    };

    const setDark = () => {
      isDark.value = !isDark.value;
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
