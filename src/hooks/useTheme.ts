import { useLocalStorage } from "@vueuse/core";

export type ThemeName = "light" | "dark";

export const useTheme = () => {
  const isDark = useLocalStorage<boolean>("theme-is-dark", false);

  const switchTheme = () => {
    const body = document.documentElement as HTMLElement;
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      isDark.value = true;
    } else {
      body.classList.add("dark");
      isDark.value = false;
    }
  };

  const initTheme = () => {
    const value = isDark.value;
    const body = document.documentElement as HTMLElement;
    body.classList.add(value ? "dark" : "light");
  };

  return { isDark, initTheme, switchTheme };
};
